/**
 * As duas conversões que importam: clique no WhatsApp e envio do formulário.
 * Empurra para o dataLayer/gtag se existirem; caso contrário, não faz nada.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Record<string, string> = {}): void {
  window.dataLayer?.push({ event, ...params });
  window.gtag?.('event', event, params);
}

/** Marca os CTAs de WhatsApp da página. */
export function trackWhatsAppClicks(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-analytics^="whatsapp"]').forEach((link) => {
    link.addEventListener('click', () => {
      track('whatsapp_click', { origem: link.dataset.analytics ?? '' });
    });
  });
}
