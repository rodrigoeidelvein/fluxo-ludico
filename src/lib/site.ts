/**
 * Configuração do site. Os valores marcados como pendentes são placeholders do
 * handoff e precisam ser confirmados com a cliente antes de publicar.
 */

/** Número em formato internacional, só dígitos. PENDENTE: número real. */
export const whatsappNumber = import.meta.env.PUBLIC_WHATSAPP || '5551000000000';

/**
 * Endpoint serverless que recebe o formulário de orçamento.
 * Vazio = modo handoff (o formulário abre o WhatsApp com o pedido escrito).
 */
export const formEndpoint: string = import.meta.env.PUBLIC_FORM_ENDPOINT || '';

/** Link wa.me com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const ctaMessage = 'Oi! Quero um orçamento para uma festa.';
export const ctaHref = whatsappLink(ctaMessage);

export const instagramUrl = 'https://www.instagram.com/fluxoludico/';

export const seo = {
  title: 'Fluxo Lúdico — recreação infantil em Porto Alegre',
  description:
    'Recreação infantil em Porto Alegre e região metropolitana: recreadores para festas, pintura facial, esculturas de balão e workshop de malabarismo. Peça seu orçamento no WhatsApp.',
};
