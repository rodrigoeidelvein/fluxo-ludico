/**
 * Conteúdo da home. Copy final conforme o handoff; mídias são placeholders até
 * a cliente enviar as fotos.
 */

export type Tint = 'tint-yellow' | 'tint-sand' | 'tint-coral' | 'tint-blue' | 'tint-green';

/** PENDENTE: números a confirmar com a cliente. */
export const proofPoints = ['+300 festas', 'Equipe uniformizada', 'Orçamento no mesmo dia'];

export const services = [
  {
    title: 'Pintura<br>facial',
    plainTitle: 'Pintura facial',
    description: 'Tintas hipoalergênicas',
    className: 'bg-blue text-paper',
  },
  {
    title: 'Balões',
    plainTitle: 'Balões',
    description: 'Cada criança sai com a sua escultura',
    className: 'bg-green text-green-ink',
  },
  {
    title: 'Malabares',
    plainTitle: 'Malabares',
    description: 'Workshop-show: todo mundo tenta',
    className: 'bg-ink text-paper',
  },
  {
    title: 'Escolas',
    plainTitle: 'Escolas',
    description: 'Oficinas de circo e jogos',
    className: 'bg-yellow text-ink',
  },
];

export const gallery: { alt: string; tint: Tint }[] = [
  { alt: 'Crianças em roda durante uma brincadeira conduzida por um recreador', tint: 'tint-sand' },
  { alt: 'Criança com pintura facial de borboleta', tint: 'tint-coral' },
  { alt: 'Escultura de balão sendo entregue a uma criança', tint: 'tint-blue' },
  { alt: 'Recreadora ensinando malabarismo a um grupo de crianças', tint: 'tint-green' },
  { alt: 'Mesa de festa com crianças brincando ao fundo', tint: 'tint-yellow' },
  { alt: 'Grupo de crianças posando com o time da Fluxo Lúdico', tint: 'tint-coral' },
];

/** PENDENTE: depoimentos com nome e foto reais. */
export const testimonials = [
  {
    quote:
      'Chegaram antes da hora, montaram tudo e as crianças ficaram hipnotizadas com o malabarismo. Melhor decisão da festa.',
    author: 'Juliana R. · Ipanema',
    avatarClass: 'bg-coral',
  },
  {
    quote:
      'Aniversário de 4 anos com 22 crianças e nenhum choro. Equipe atenciosa e paciente com os pequenos.',
    author: 'Marcos A. · Canoas',
    avatarClass: 'bg-green',
  },
];

/** PENDENTE: nomes e fotos da equipe. */
export const team: { name: string; role: string; tint: Tint }[] = [
  { name: 'Nome', role: 'Arte-educador', tint: 'tint-coral' },
  { name: 'Nome', role: 'Malabarista', tint: 'tint-blue' },
  { name: 'Nome', role: 'Pintura facial', tint: 'tint-green' },
];

export const instagramPosts: { alt: string; tint: Tint }[] = [
  { alt: 'Post do Instagram: festa infantil com recreação', tint: 'tint-sand' },
  { alt: 'Post do Instagram: pintura facial', tint: 'tint-coral' },
  { alt: 'Post do Instagram: esculturas de balão', tint: 'tint-blue' },
];

export const serviceChips = ['Recreação', 'Pintura', 'Balões', 'Malabares'];
