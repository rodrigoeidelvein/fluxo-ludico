/**
 * Formulário de orçamento: máscara, validação e máquina de estados
 * 'idle' | 'invalid' | 'sending' | 'sent' | 'error'.
 *
 * Sem `data-endpoint` configurado o formulário opera em modo *handoff*: o
 * pedido validado vira uma mensagem pronta no WhatsApp. É o comportamento de
 * lançamento enquanto o endpoint serverless não existe.
 */

import { track } from './analytics';

type FieldName = 'nome' | 'whatsapp' | 'dataBairro';

const MESSAGES: Record<FieldName, string> = {
  nome: 'Escreve teu nome, por favor.',
  whatsapp: 'Precisamos de um WhatsApp com DDD.',
  dataBairro: 'Qual a data e o bairro da festa?',
};

/** Aplica a máscara (51) 99999-9999 conforme a pessoa digita. */
export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  // 8 dígitos → 4+4; 9 dígitos → 5+4.
  const split = rest.length > 8 ? 5 : 4;
  return `(${ddd}) ${rest.slice(0, split)}-${rest.slice(split)}`;
}

export function validate(values: Record<FieldName, string>): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  if (values.nome.trim().length < 2) errors.nome = MESSAGES.nome;
  if (values.whatsapp.replace(/\D/g, '').length < 10) errors.whatsapp = MESSAGES.whatsapp;
  if (values.dataBairro.trim().length === 0) errors.dataBairro = MESSAGES.dataBairro;
  return errors;
}

function buildMessage(values: Record<FieldName, string>, servicos: string[]): string {
  const lines = [
    'Oi! Quero um orçamento para uma festa.',
    `Nome: ${values.nome.trim()}`,
    `WhatsApp: ${values.whatsapp.trim()}`,
    `Data e bairro: ${values.dataBairro.trim()}`,
  ];
  if (servicos.length) lines.push(`Serviços: ${servicos.join(', ')}`);
  return lines.join('\n');
}

export function setupQuoteForm(form: HTMLFormElement): void {
  const endpoint = form.dataset.endpoint ?? '';
  const whatsappBase = form.dataset.whatsappBase ?? '';
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const formError = form.querySelector<HTMLElement>('[data-form-error]')!;
  const success = form.parentElement!.querySelector<HTMLElement>('[data-quote-success]')!;

  const inputs = (['nome', 'whatsapp', 'dataBairro'] as FieldName[]).map(
    (name) => form.elements.namedItem(name) as HTMLInputElement,
  );

  const phone = form.elements.namedItem('whatsapp') as HTMLInputElement;
  phone.addEventListener('input', () => {
    phone.value = maskPhone(phone.value);
  });

  function readValues(): Record<FieldName, string> {
    return {
      nome: (form.elements.namedItem('nome') as HTMLInputElement).value,
      whatsapp: phone.value,
      dataBairro: (form.elements.namedItem('dataBairro') as HTMLInputElement).value,
    };
  }

  function readServices(): string[] {
    return Array.from(
      form.querySelectorAll<HTMLInputElement>('input[name="servicos"]:checked'),
    ).map((input) => input.value);
  }

  function showErrors(errors: Partial<Record<FieldName, string>>): void {
    for (const input of inputs) {
      const message = errors[input.name as FieldName];
      const slot = form.querySelector<HTMLElement>(`[data-error-for="${input.name}"]`)!;
      slot.textContent = message ?? '';
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }
  }

  /** Estado de erro: mostra o fallback com link direto do WhatsApp. */
  function showSendError(message: string): void {
    const href = whatsappBase + encodeURIComponent(buildMessage(readValues(), readServices()));
    formError.innerHTML = '';
    formError.append(`${message} `);
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.className = 'underline underline-offset-[3px]';
    link.textContent = 'Chamar no WhatsApp';
    formError.append(link);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    formError.textContent = '';

    const values = readValues();
    const errors = validate(values);
    showErrors(errors);

    if (Object.keys(errors).length > 0) {
      form.querySelector<HTMLInputElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    const servicos = readServices();

    // Modo handoff: sem endpoint, o pedido vai direto para o WhatsApp.
    if (!endpoint) {
      track('orcamento_whatsapp_handoff', { servicos: servicos.join(',') });
      window.open(
        whatsappBase + encodeURIComponent(buildMessage(values, servicos)),
        '_blank',
        'noopener',
      );
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Enviando…';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, servicos }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      track('orcamento_enviado', { servicos: servicos.join(',') });
      form.hidden = true;
      success.hidden = false;
      success.querySelector('p')?.setAttribute('tabindex', '-1');
      success.querySelector<HTMLElement>('p')?.focus();
    } catch {
      showSendError('Não conseguimos enviar agora.');
    } finally {
      submit.disabled = false;
      submit.textContent = 'Enviar';
    }
  });
}
