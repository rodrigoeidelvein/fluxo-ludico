/**
 * Lightbox da galeria: abre pelos itens com `data-gallery-item`, navega por
 * setas do teclado, botões e swipe horizontal, fecha com Esc ou no backdrop.
 */

const SWIPE_THRESHOLD = 40;

export function setupLightbox(): void {
  const found = document.querySelector<HTMLDialogElement>('[data-lightbox]');
  if (!found) return;
  const dialog = found;

  const slides = Array.from(
    dialog.querySelectorAll<HTMLElement>('[data-lightbox-stage] > *'),
  );
  if (slides.length === 0) return;

  const indexLabel = dialog.querySelector<HTMLElement>('[data-lightbox-index]')!;
  const caption = dialog.querySelector<HTMLElement>('[data-lightbox-caption]')!;
  let index = 0;

  function show(next: number): void {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('hidden', i !== index));
    indexLabel.textContent = String(index + 1);
    caption.textContent = slides[index].dataset.caption ?? '';
  }

  function open(at: number): void {
    show(at);
    dialog.showModal();
  }

  document.querySelectorAll<HTMLElement>('[data-gallery-item]').forEach((trigger) => {
    trigger.addEventListener('click', () => open(Number(trigger.dataset.galleryItem ?? 0)));
  });

  dialog.querySelector('[data-lightbox-close]')!.addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-lightbox-prev]')!.addEventListener('click', () => show(index - 1));
  dialog.querySelector('[data-lightbox-next]')!.addEventListener('click', () => show(index + 1));

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(index - 1);
    if (event.key === 'ArrowRight') show(index + 1);
  });

  // Clique fora da área de conteúdo fecha.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  let startX: number | null = null;
  dialog.addEventListener(
    'touchstart',
    (event) => {
      startX = event.changedTouches[0]?.clientX ?? null;
    },
    { passive: true },
  );
  dialog.addEventListener(
    'touchend',
    (event) => {
      if (startX === null) return;
      const delta = (event.changedTouches[0]?.clientX ?? startX) - startX;
      if (Math.abs(delta) > SWIPE_THRESHOLD) show(index + (delta < 0 ? 1 : -1));
      startX = null;
    },
    { passive: true },
  );
}
