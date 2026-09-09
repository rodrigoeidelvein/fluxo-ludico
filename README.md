# Fluxo Lúdico — site

Landing page única da **Fluxo Lúdico**, recreação de festas infantis em Porto Alegre e região
metropolitana. Astro + Tailwind, saída estática.

Implementa a direção **1b** do handoff em [`design_handoff_fluxo_ludico/`](design_handoff_fluxo_ludico/)
(`README.md` é a especificação; `Fluxo Ludico Home.dc.html` é o protótipo de referência).

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
npm run preview  # serve o dist/
npm run check    # astro check (typecheck)
```

## Estrutura

```
src/
  data/content.ts       copy e listas (serviços, galeria, relatos, equipe)
  lib/site.ts           WhatsApp, endpoint do formulário, SEO
  lib/quote-form.ts     máscara, validação e estados do formulário
  lib/lightbox.ts       galeria em lightbox (teclado, swipe, backdrop)
  lib/analytics.ts      eventos de conversão (dataLayer/gtag)
  styles/global.css     design tokens do handoff como @theme do Tailwind
  components/           uma seção por componente
  pages/index.astro     a ordem das seções é o funil — não alterar
```

Os tokens do handoff viram utilitários do Tailwind: `bg-ink`, `text-paper`, `bg-yellow`, `bg-coral`,
`bg-blue`, `bg-green`, `text-accent`, `bg-whatsapp`, `rounded-control|media|card`, `text-h1|h2|poster|lead`,
`font-display|sans|mono`, além de `eyebrow` e `hatched`.

## Configuração

Copie `.env.example` para `.env`:

| Variável | Efeito |
| --- | --- |
| `PUBLIC_WHATSAPP` | Número em formato internacional, só dígitos. |
| `PUBLIC_FORM_ENDPOINT` | Endpoint serverless que recebe o orçamento por `POST` JSON. |

### Formulário de orçamento

O handoff pede um endpoint serverless, que ainda não existe. Por isso o formulário tem dois modos:

- **`PUBLIC_FORM_ENDPOINT` vazio (padrão hoje):** modo *handoff*. O formulário valida os campos e abre
  o WhatsApp com o pedido já escrito. O site pode ir ao ar sem backend e sem perder lead.
- **`PUBLIC_FORM_ENDPOINT` preenchido:** `POST` de `{ nome, whatsapp, dataBairro, servicos[] }` em JSON.
  Resposta 2xx troca o formulário pela confirmação ("Recebemos! Respondemos hoje pelo WhatsApp.");
  qualquer erro mostra o fallback com link direto do WhatsApp.

Como o site é estático, o endpoint é externo (Vercel/Netlify Function, Formspree e afins). Se preferir
manter tudo no mesmo deploy, é só adicionar o adapter da plataforma e criar a rota em `src/pages/api/`.

### Analytics

`src/lib/analytics.ts` emite as duas conversões que importam — `whatsapp_click` e `orcamento_enviado`
(ou `orcamento_whatsapp_handoff`) — para `window.dataLayer` / `gtag` se existirem. Basta incluir a tag
do GA/GTM no `<head>` de `src/layouts/Base.astro`.

## Pendências da cliente

Estão marcadas com `PENDENTE` no código:

- **Número real do WhatsApp** — hoje `5551000000000` em `.env.example`.
- **Fotos** — todas as mídias são placeholders hachurados (`src/components/Photo.astro`). Ao receber as
  reais, troque o conteúdo do componente por `<Image>`, mantendo `alt` em português, `loading="lazy"` e
  a altura/aspect-ratio já fixados para não gerar layout shift.
- **Prova social** — "+300 festas" e os demais números em `src/data/content.ts` precisam de confirmação.
- **Relatos e equipe** — nomes e fotos reais em `src/data/content.ts`.
- **Logo** — o header usa o wordmark em Archivo Black, como no protótipo.

## Decisões de implementação

- **Desktop:** o handoff não tem design de desktop, então a coluna de 560px apenas centraliza sobre o
  fundo escuro, como previsto na seção *Responsivo*.
- **Chip "Recreação" pré-marcado:** é o estado mostrado no protótipo. Para começar sem nenhum serviço
  marcado, remova o `checked` em `src/components/QuoteForm.astro`.
- **Fontes auto-hospedadas** via Fontsource (Archivo, Archivo Black, DM Mono) — sem chamada ao Google Fonts.
- **Ícone do WhatsApp:** glifo oficial da marca, no lugar do círculo do protótipo.
- **Acessibilidade:** alvos de toque de 44px, `prefers-reduced-motion` respeitado, labels visualmente
  ocultos nos campos, erros com `aria-invalid` + `aria-live`.
