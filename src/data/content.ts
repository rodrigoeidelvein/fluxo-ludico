/**
 * Conteúdo da home. Copy final conforme o handoff. Galeria e Instagram usam as
 * artes reais; hero e equipe seguem com placeholder até chegarem as fotos.
 */

import type { ImageMetadata } from 'astro';
import esculturasDeBalao from '../assets/photos/esculturas-de-balao.jpg';
import oficinaEscolaColagem from '../assets/photos/oficina-escola-colagem.jpg';
import oficinaMalabarismoEscolas from '../assets/photos/oficina-malabarismo-escolas.jpg';
import pinturaBaloesFestas from '../assets/photos/pintura-baloes-festas.jpg';
import pinturaFacialDesenhos from '../assets/photos/pintura-facial-desenhos.jpg';
import vivenciasEducadoresMalabarismo from '../assets/photos/vivencias-educadores-malabarismo.jpg';

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

export const gallery: { alt: string; tint: Tint; src: ImageMetadata }[] = [
  {
    alt: 'Pinturas faciais da Fluxo Lúdico: unicórnios, Sonic, Pikachu, Stitch e desenhos nas mãos das crianças',
    tint: 'tint-coral',
    src: pinturaFacialDesenhos,
  },
  {
    alt: 'Esculturas de balão: urso no coração, pinguim, dinossauro, cachorro e criança segurando uma espada de balão',
    tint: 'tint-blue',
    src: esculturasDeBalao,
  },
  {
    alt: 'Oficina em escola: recreadores fazendo malabarismo com as crianças no pátio — movimento, aprendizado e diversão',
    tint: 'tint-green',
    src: oficinaEscolaColagem,
  },
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

export const instagramPosts: { alt: string; tint: Tint; src: ImageMetadata }[] = [
  {
    alt: 'Post do Instagram: pintura facial e esculturas de balões para festas infantis',
    tint: 'tint-coral',
    src: pinturaBaloesFestas,
  },
  {
    alt: 'Post do Instagram: oficina de malabarismo para escolas — brincar também é aprender',
    tint: 'tint-green',
    src: oficinaMalabarismoEscolas,
  },
  {
    alt: 'Post do Instagram: vivências para educadores — o malabarismo como ferramenta pedagógica',
    tint: 'tint-sand',
    src: vivenciasEducadoresMalabarismo,
  },
];

export const serviceChips = ['Recreação', 'Pintura', 'Balões', 'Malabares'];
