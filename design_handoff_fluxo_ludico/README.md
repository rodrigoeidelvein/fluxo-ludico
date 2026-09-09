# Handoff: Site Fluxo Lúdico — home (direção 1b)

## Overview
Landing page única para a **Fluxo Lúdico**, empresa de recreação de festas infantis em Porto Alegre e região metropolitana (Instagram: https://www.instagram.com/fluxoludico/).
Serviços: recreação de festas, pintura facial, esculturas de balão, workshop de malabarismo, oficinas em escolas.

Objetivos, em ordem:
1. Gerar contato no **WhatsApp** (meta principal — CTA fixo sempre visível).
2. Passar **confiança aos pais** (prova social, equipe, depoimentos).
3. **Não exibe preços** — todo caminho termina em pedido de orçamento.

Público-alvo: pais decidindo a festa dos filhos. Prioridade **mobile-first**.

## About the Design Files
Os arquivos deste pacote são **referências de design feitas em HTML** — protótipos que mostram aparência e comportamento pretendidos, **não código de produção para copiar**.
A tarefa é **recriar esses designs no ambiente do codebase alvo** (Next.js/React, Astro, Vue, WordPress, o que for) usando seus padrões e bibliotecas. Se ainda não existe codebase, escolha a stack mais adequada — para um site institucional de página única com formulário, **Astro ou Next.js (App Router) + Tailwind, hospedado em Vercel/Netlify**, é a recomendação.

## Fidelity
**High-fidelity.** Cores, tipografia, espaçamentos e copy são finais. Recriar fielmente.
Ressalva: **todas as imagens são placeholders** (áreas hachuradas). Fotos reais das festas, logo e depoimentos com nome ainda serão fornecidos pela cliente.

## Screens / Views

### Home (única página, rolagem vertical)
Container: coluna única, `max-width: 560px`, centralizada, fundo `#FFFDF7`. Fundo fora do container: `#16130F`.
Padding lateral padrão das seções: **18px**. Espaçamento vertical entre seções: **26–28px**.

Ordem das seções — **não alterar**, ela é o funil:

1. **Header (sticky, topo)** — barra `#16130F`, texto `#FFFDF7`, padding 12px 16px, flex space-between.
   Esquerda: "FLUXO LÚDICO", Archivo Black 15px, letter-spacing −.02em. Direita: "POA · RS", DM Mono 500 10px, letter-spacing .08em.
2. **Herói** — fundo `oklch(0.86 0.16 88)` (amarelo). Padding 28px 18px 0.
   - H1: "Festa de / criança / é trabalho / nosso." — Archivo Black, `clamp(40px,12vw,56px)`, line-height .92, letter-spacing −.035em, UPPERCASE, quebras de linha manuais.
   - Parágrafo: Archivo 500 `clamp(14px,3.6vw,17px)`/1.5, max-width 34ch.
   - CTA primário: fundo `#16130F`, texto `#FFFDF7`, radius 8px, padding 16px 18px, Archivo 600 16px, ícone = círculo `#25D366` 16px. Link `https://wa.me/55519XXXXXXXX` (número real pendente).
   - Foto placeholder 220px de altura.
3. **Faixa de prova social** — fundo `#16130F`, DM Mono 500 11px, letter-spacing .06em, itens separados por "★": "+300 FESTAS", "EQUIPE UNIFORMIZADA", "ORÇAMENTO NO MESMO DIA". *Números devem ser confirmados com a cliente antes de publicar.*
4. **01 — SERVIÇOS** — eyebrow DM Mono 11px letter-spacing .12em cor `oklch(0.55 0.16 20)`. Um cartaz grande ("Recreação", fundo `oklch(0.74 0.15 12)`, radius 14px, círculo decorativo branco 16% no canto superior direito) + grid 2×2 de cartões: Pintura facial `oklch(0.62 0.14 250)`, Balões `oklch(0.66 0.15 150)` (texto `#0B1F14`), Malabares `#16130F`, Escolas `oklch(0.86 0.16 88)` (texto `#16130F`). Títulos Archivo Black 18px UPPERCASE; descrição Archivo 500 12px/1.4.
5. **02 — GALERIA** — grid `2fr 1fr`, gap 7px, radius 12px; foto principal 190px + duas menores empilhadas. Link "ver todas as fotos →" sublinhado.
6. **03 — RELATOS** — bloco escuro `#16130F`, eyebrow em amarelo `oklch(0.86 0.16 88)`. Cards `rgba(255,253,247,.07)`, radius 14px, padding 18px. Citação Archivo 500 14px/1.5; assinatura DM Mono 11px `rgba(255,253,247,.7)` + avatar circular 28px.
7. **04 — A EQUIPE** — grid de 3 colunas, foto 120px radius 12px, nome Archivo 600 12.5px, função Archivo 400 11px `rgba(22,19,15,.6)`.
8. **Instagram** — título "@fluxoludico" Archivo Black 18px + link "SEGUIR" DM Mono 11px `oklch(0.55 0.16 20)` → https://www.instagram.com/fluxoludico/. Grid 3×1 de posts quadrados (feed embutido).
9. **Orçamento** — fundo amarelo. H2 "PEDE O / ORÇAMENTO" Archivo Black `clamp(28px,8vw,36px)`. Campos: fundo `#FFFDF7`, borda 1.5px `#16130F`, radius 8px, padding 14px. Chips de serviço (pílulas): selecionado = fundo `#16130F` texto claro; não selecionado = borda 1.5px `#16130F`, DM Mono 11px. Botão "Enviar" `#16130F`, radius 8px, padding 16px.
10. **Footer** — `#16130F`, DM Mono 500 11px/1.7, `rgba(255,253,247,.6)`: nome, região, @.
11. **Barra WhatsApp (sticky, rodapé)** — fundo `#25D366`, texto `#0B2E18`, Archivo 600 16px, padding 15px 18px, sempre visível em todas as seções.

## Interactions & Behavior
- **CTA WhatsApp** (herói + barra fixa): `https://wa.me/<numero>?text=` com mensagem pré-preenchida, ex.: "Oi! Quero um orçamento para uma festa." Abre em nova aba. A barra fixa nunca desaparece no mobile.
- **Chips de serviço** no formulário: seleção múltipla, toggle, estado visual descrito acima.
- **Formulário de orçamento**: campos Nome, WhatsApp, "Data e bairro" + chips. Validação: nome obrigatório (≥2 caracteres), WhatsApp obrigatório com máscara `(51) 99999-9999` e ≥10 dígitos, data obrigatória. Erro = borda `oklch(0.55 0.16 20)` + mensagem DM Mono 11px abaixo do campo. Envio: estado "Enviando…" com botão desabilitado (opacidade .6); sucesso substitui o formulário por confirmação ("Recebemos! Respondemos hoje pelo WhatsApp."); erro mostra fallback com link direto do WhatsApp.
- **Hover** (desktop): CTA escuro → `#000`; cards de serviço → `translateY(-2px)` em 150ms ease-out; links → `oklch(0.55 0.16 20)`.
- **Galeria**: clique abre lightbox com navegação por swipe/setas.
- **Responsivo**: layout é mobile-first em coluna única com `max-width:560px`. Para desktop, ainda **não há design** — ou centraliza a coluna (aceitável para o lançamento) ou peça a versão desktop à designer antes de inventar um layout largo.
- Transições: 150–200ms ease-out. Respeitar `prefers-reduced-motion`.

## State Management
- `form`: { nome, whatsapp, dataBairro, servicos: string[] }
- `formStatus`: 'idle' | 'invalid' | 'sending' | 'sent' | 'error'
- `lightbox`: { aberto: boolean, indice: number }
- Envio: endpoint serverless → e-mail/WhatsApp Business API/planilha. Sem login, sem conta de usuário.
- SEO/analytics: título e meta descrição com "recreação infantil Porto Alegre"; evento de clique no WhatsApp e envio de formulário no analytics — são as duas conversões que importam.

## Design Tokens
Cores
- Tinta / escuro: `#16130F`
- Papel / claro: `#FFFDF7`
- Amarelo (herói, orçamento): `oklch(0.86 0.16 88)`
- Coral (cartaz Recreação): `oklch(0.74 0.15 12)`
- Azul (Pintura facial): `oklch(0.62 0.14 250)`
- Verde (Balões): `oklch(0.66 0.15 150)` — texto sobre ele: `#0B1F14`
- Vermelho de acento (eyebrows, links): `oklch(0.55 0.16 20)`
- WhatsApp: `#25D366` — texto sobre ele: `#0B2E18`
- Superfície sobre escuro: `rgba(255,253,247,.07)`; texto secundário sobre escuro: `rgba(255,253,247,.6–.7)`; texto secundário sobre claro: `rgba(22,19,15,.6)`
- Placeholders de foto: `repeating-linear-gradient(135deg, rgba(0,0,0,.06) 0 7px, transparent 7px 14px)` sobre um tom pastel da paleta

Tipografia (Google Fonts)
- Display: **Archivo Black** 400 — H1 `clamp(40px,12vw,56px)`/.92/−.035em; H2 `clamp(28px,8vw,36px)`/1/−.03em; H3 18px/1/−.02em; UPPERCASE
- Texto: **Archivo** 400/500/600 — corpo 13–17px/1.4–1.5; botões 600 16px
- Detalhe/eyebrow: **DM Mono** 400/500 — 10–11px, letter-spacing .06–.12em, UPPERCASE

Espaçamento: 5 · 7 · 8 · 10 · 14 · 16 · 18 · 22 · 26 px
Radius: 8px (botões, campos) · 12px (mídia) · 14px (cards) · 999px (chips)
Alvos de toque: mínimo 44px de altura em tudo que é clicável.

## Assets
- **Nenhuma imagem final.** Todas as mídias são placeholders hachurados; a cliente vai fornecer fotos das festas, logo e depoimentos com nome. Servir em WebP com `loading="lazy"` e `aspect-ratio` fixo para evitar layout shift; alt text descritivo em português.
- Fontes: Google Fonts (Archivo, Archivo Black, DM Mono) — auto-hospedar em produção.
- Ícone do WhatsApp: usar o glifo oficial da marca no lugar do círculo do protótipo.
- Números de prova social (+300 festas, 6 anos) são placeholders a confirmar.

## Files
- `Fluxo Ludico Home.dc.html` — a direção escolhida (1b) como página completa. **É esta que deve ser implementada.**
- `Fluxo Ludico Site.dc.html` — as três direções exploradas (1a, 1b, 1c) lado a lado, para contexto.
Ambos abrem direto no navegador (precisam do `support.js` ao lado, incluído).
