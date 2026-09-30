# Especificação Visual — Portfólio José Gabriel

## Design Concept
**Software com método. Negócios com clareza.** O portfólio será percebido como a presença digital de um pequeno estúdio de software conduzido por um desenvolvedor backend: precisão técnica, leitura comercial e execução confiável. A composição combina estrutura suíça, ritmo editorial e linguagem de produto B2B. A primeira dobra comunica, nesta ordem: José Gabriel, desenvolvedor de software, Java/Spring Boot, sistemas sob medida e disponibilidade PJ.

## Art Direction
Direção única: **editorial técnico contemporâneo**. Grandes blocos tipográficos alinhados à esquerda, grid visível pela composição, linhas finas, numeração de seções e fotografia vertical. O caráter tecnológico virá de hierarquia, nomenclatura, microtipografia e consistência — nunca de neon, “código cenográfico” ou futurismo. Tom humano por meio de off-white, cinzas quentes e fotografia natural; autoridade por grafite e verde profundo; energia comercial por cobre.

## Color System
### Light Theme
| Token | HEX | Função e uso | Não usar |
|---|---|---|---|
| background | `#F4F1EA` | Fundo editorial principal | Em botões de alta ênfase |
| background-secondary | `#EAE5DB` | Alternância de seções | Em toda seção consecutiva |
| surface | `#FAF8F3` | Cards, campos, menus | Como fundo dominante |
| surface-elevated | `#FFFFFF` | Modal e elementos elevados | Em grandes faixas |
| text-primary | `#20221F` | Títulos e texto principal | Sobre fundos escuros |
| text-secondary | `#4F534D` | Corpo e descrições | Texto crítico pequeno |
| text-muted | `#777B73` | Metadados e legendas | Informações essenciais |
| border | `#D3CEC3` | Divisores e contornos | Como decoração pesada |
| accent | `#A64B2A` | CTA, links, foco e seleção | Grandes fundos repetidos |
| accent-hover | `#843A22` | Hover/active do accent | Texto longo |
| accent-soft | `#EBD8CC` | Badges e fundos discretos | CTA principal |
| success | `#2F6B4F` | Disponibilidade e confirmação | Decoração genérica |
| warning | `#A56B16` | Alertas não críticos | Badges de tecnologia |
| error | `#A43E38` | Erros de formulário | Destaques comerciais |

### Dark Theme
| Token | HEX | Função e uso | Não usar |
|---|---|---|---|
| background | `#181A17` | Fundo principal, grafite esverdeado | Preto absoluto |
| background-secondary | `#20231F` | Alternância de seções | Em superfícies elevadas |
| surface | `#252824` | Cards e campos | Em toda a página |
| surface-elevated | `#2B2E29` | Modal e menus | Como background global |
| text-primary | `#F1EEE6` | Títulos e corpo de alta ênfase | Sobre fundos claros |
| text-secondary | `#C4C1B8` | Corpo | Texto desabilitado |
| text-muted | `#92958D` | Metadados | Ações importantes |
| border | `#3A3E38` | Contornos | Alto contraste |
| accent | `#D2764F` | CTA, links e foco | Áreas extensas |
| accent-hover | `#E18A64` | Hover | Fundos de página |
| accent-soft | `#4A3027` | Badges e estados sutis | Texto principal |
| success | `#65A883` | Disponibilidade | Destaque não semântico |
| warning | `#D1A45B` | Alertas | Decoração |
| error | `#D5746C` | Erros | CTA |

**Proporção:** 68% fundos neutros, 18% superfícies, 10% texto/bordas, até 4% accent. Fundo sólido organiza; borda separa; preenchimento indica estado ou ação. Accent apenas em conversão, navegação ativa e informação excepcional. Sem gradientes na interface.

## Typography System
- **Display e títulos:** `Manrope` — desenho contemporâneo, técnico e legível, sem parecer corporativo genérico.
- **Texto:** `Source Sans 3` — leitura confortável em três idiomas e alta densidade informacional.
- **Mono:** `IBM Plex Mono` — tecnologias, numeração, overlines e microdados.

| Nível | Desktop / Mobile | Peso | Line-height | Tracking | Uso |
|---|---|---:|---:|---:|---|
| Display XL | 80 / 48 px | 600 | 0.98 / 1.02 | -0.02em | Assinatura do hero |
| Display | 64 / 42 px | 600 | 1.02 | -0.02em | CTA final |
| H1 | 52 / 38 px | 600 | 1.08 | -0.015em | Título principal alternativo |
| H2 | 42 / 32 px | 600 | 1.12 | -0.01em | Seções |
| H3 | 28 / 24 px | 600 | 1.2 | 0 | Cards principais |
| H4 | 20 / 18 px | 650 | 1.3 | 0 | Subgrupos |
| Body Large | 20 / 18 px | 400 | 1.6 | 0 | Introduções |
| Body | 17 / 16 px | 400 | 1.65 | 0 | Conteúdo |
| Body Small | 15 / 14 px | 400 | 1.55 | 0 | Cards |
| Caption | 13 / 12 px | 500 | 1.45 | 0.01em | Metadados |
| Overline | 12 / 11 px | 600 | 1.4 | 0.12em | Seções |
| Code | 13 / 12 px | 500 | 1.5 | 0 | Stack e fluxo técnico |

## Grid & Layout
Conteúdo máximo `1280px`; texto corrido máximo `680px`. Desktop: 12 colunas, gutter 24px, margens 48–80px. Laptop: 12 colunas, 24px, margens 40px. Tablet: 8 colunas, 20px, margens 32px. Mobile: 4 colunas, 16px, margens 20px. Seções usam 120px vertical no desktop, 96px laptop, 80px tablet e 64px mobile. Hero ocupa aproximadamente 82–88vh, sempre revelando o início da próxima seção.

## Spacing System
`4` ajustes óticos; `8` ícone/texto; `12` tags; `16` controles e conteúdo compacto; `24` card e grupos; `32` blocos; `48` colunas e cabeçalhos; `64` divisões mobile; `80` seções tablet; `96` seções laptop; `120` seções desktop. Não criar valores intermediários sem necessidade técnica.

## Radius & Borders
Botões `6px`; cards `8px`; inputs `6px`; modal `10px`; imagens `6px`; tags `999px` apenas para pills semânticas; pequenos elementos `4px`. Bordas de `1px` em `border`; divisores internos com 60% da opacidade. Nada de contorno duplo decorativo.

## Shadows
- `shadow-sm`: `0 1px 2px rgba(20,22,19,.06)` — menus e controles.
- `shadow-md`: `0 10px 30px rgba(20,22,19,.10)` — cards em interação.
- `shadow-lg`: `0 24px 70px rgba(12,14,12,.22)` — modal apenas.
- Focus ring: `0 0 0 3px` com accent a 28%, além de borda accent. Sombras não substituem bordas.

## Buttons
**Primary:** fundo accent, texto claro, 44–48px de altura. **Secondary:** transparente, borda e texto primário. **Ghost:** sem borda, fundo surface no hover. **Text:** link com seta e sublinhado que cresce. Padding horizontal 18–22px; Manrope 14px/600; ícones 18px. Hover em 160ms, active com deslocamento de 1px, disabled a 45% sem interação; foco sempre visível.

## Cards
Peças editoriais, não caixas independentes. Surface + borda sutil, 8px, padding 24–32px. Título próximo ao metadado, corpo limitado, CTA ancorado na base. Hover: borda ganha contraste, imagem desloca no máximo 4px e seta avança 3px; sem elevação teatral.

## Project Cards
Composição final: **grid editorial assimétrico de 12 colunas**. Reservas ocupa 7 colunas e recebe prioridade por experiência real; CheckInHub ocupa 5. OdontoSystem e VetAgenda dividem a linha seguinte; Scheduling Platform usa faixa horizontal mais contida. Imagem 16:10, ocupando 55–65% do card; frame uniforme de produto, sem mockup de laptop. Stack mostra 3–5 tecnologias e “+N” quando necessário. Backend e frontend aparecem como dois links/repositórios do mesmo produto, nunca como projetos separados.

Hierarquia: projeto principal = mais área e imagem; cliente real = badge e barra lateral verde; secundário = menor escala, mesma qualidade. Nenhuma diferença sugere métricas ou senioridade não comprovadas.

## Project Modal
Overlay `rgba(20,22,19,.72)`, sem blur ou no máximo 2px. Container máximo 1120px, altura até 90vh, surface-elevated, borda, radius 10px e shadow-lg. Header sticky com nome, categoria e fechar de 44px. Galeria 16:9 com setas laterais, indicadores e legendas; thumbnails opcionais no desktop. Conteúdo em 8/4 colunas: narrativa à esquerda, stack e links à direita. Ordem: descrição → problema → solução → funcionalidades confirmadas → destaques técnicos confirmados → stack. No mobile vira painel de tela inteira, header fixo, imagem 4:3, ações em largura total. ESC, clique externo, foco contido e retorno ao gatilho.

## Hero
Grid 7/5. Esquerda: overline mono, headline de até três linhas, descrição de 2–3 linhas, CTAs e disponibilidade. Direita: retrato editorial 4:5 com legenda lateral “Backend por especialização / Full stack por capacidade”. Abaixo, pipeline técnico horizontal `Java → Spring Boot → REST → PostgreSQL → Docker`, mono e discreto. Sem card de código.

## Photography Direction
Retrato vertical 4:5, crop do peito para cima, olhar natural, fundo simples, luz lateral suave. Frame assimétrico com imagem ocupando 94% e faixa de legenda no rodapé. Borda 1px; sem círculo, duotone ou filtro pesado. Light preserva tons naturais; dark reduz levemente brilho do frame, não da pele. Duas fotos em camadas alternam a cada 5s por crossfade de 700ms com deslocamento vertical de 4px; pausa quando a aba estiver oculta e desativa movimento em reduced motion.

## Icons
Lucide, outline, stroke 1.75. 16px em texto, 18–20px em controles, 24px em serviços. Sempre com rótulo ou nome acessível. Usar para ação, direção ou significado; nunca para preencher vazio.

## Badges
Stack: mono 12px/500, 28px de altura, padding 10px, fundo surface, borda, radius pill, todos neutros. Estados usam cor semântica. Badge **Projeto para cliente real**: verde profundo/success-soft, ícone `BriefcaseBusiness` de 14px, texto 12px/600, no canto superior da legenda da imagem; sem animação contínua.

## Navigation
Header sticky de 72px, logo `JG` à esquerda, links ao centro, idioma/tema/CTA à direita. Após 24px de scroll: surface a 94%, borda inferior e altura 64px; sem glassmorphism. Link ativo com pequeno traço cobre. Mobile: 60px, menu em painel vertical sob o header, fundo sólido, foco contido, fecha por ESC, link ou clique externo. Seletor de idioma compacto PT/EN/ES; tema com ícone e tooltip.

## Sections
- **Hero:** fundo principal, tipografia e retrato.
- **Sobre:** faixa secondary, manifesto 7/5 e cadeia problema→entrega.
- **Serviços:** lista 2 colunas com linhas, não seis cards isolados.
- **Projetos:** maior densidade visual e imagens dominantes.
- **Habilidades:** matriz técnica por grupos.
- **Processo:** linha editorial sequencial.
- **Experiência:** timeline contida, factual.
- **Educação:** bloco curto em três linhas.
- **Contato:** contraste verde profundo no light e surface elevada no dark; formulário ao lado das ações.
- **Footer:** compacto, borda superior, identidade e links.

## Skills
Matriz de 3 colunas com categorias separadas por linhas. Cada grupo traz índice mono, título, frase de contexto e tags neutras. Backend ocupa duas colunas na primeira linha para explicitar especialização; Data, Quality, DevOps, Frontend e Cloud completam o grid. Sem níveis, barras, percentuais ou logos multicoloridos.

## Process Section
Uma **linha de entrega** horizontal no desktop: seis etapas conectadas por uma régua fina; números grandes ficam no fundo e cada etapa alterna acima/abaixo da régua, criando ritmo editorial. No mobile, régua vertical à esquerda e conteúdo alternado por blocos, não seis cards. A etapa ativa ao entrar no viewport ganha accent no marcador, uma vez.

## Motion System
Rápida `160ms`; média `280ms`; longa `700ms`. Easing principal `cubic-bezier(.22,1,.36,1)`; saída `cubic-bezier(.4,0,1,1)`. Seções: opacity 0→1 e translateY 16→0 em 500ms, uma vez. Modal 280ms; hover 160ms; menu 240ms; idioma troca conteúdo com fade de 140ms; tema usa transição de cores 240ms; foto 700ms. Nada de bounce, parallax ou loop decorativo.

## Microinteractions
Botão responde por contraste e 1px de pressão; link revela linha; card enfatiza borda/imagem/seta; ícone gira no máximo 15° apenas quando semântico; theme switch troca ícone com rotação curta; idioma marca seleção; modal preserva foco; navegação ativa segue IntersectionObserver; botão voltar ao topo aparece após 700px.

## Dark Theme
Não é inversão: base grafite-esverdeada, surfaces em três níveis, texto marfim e cobre mais luminoso. Imagens mantêm cor real com frame escuro. Primary continua cobre; secondary usa borda clara controlada. Modal destaca-se por surface-elevated e sombra; header usa background opaco. Contraste mínimo AA.

## Responsive Rules
- **1440+:** 12 colunas, hero 7/5, projetos assimétricos, modal 1120px.
- **1024–1439:** 12 colunas, tipografia reduzida, hero 6/6, serviços 2 colunas.
- **768–1023:** 8 colunas, hero 5/3, navegação compacta/menu, projetos 2 colunas, modal 94vw.
- **320–767:** 4 colunas; ordem hero: texto, CTAs, foto, pipeline; CTAs podem ocupar largura total; projetos em uma coluna com imagem 4:3; serviços em lista; formulário sem colunas. Nada apenas “empilhado”: a numeração lateral e alternância de fundos preservam ritmo.

## Accessibility
WCAG AA: texto normal ≥4.5:1, grande ≥3:1; target mínimo 44×44px; foco visível em todos os controles; landmarks e headings em ordem; modal com título anunciado, foco contido e retorno; setas com rótulos; imagens com alt factual; decorativos ignorados; mensagens de formulário anunciadas; idioma no documento atualizado; reduced motion remove deslocamentos, autoplay da galeria e crossfade animado.

## Project Image Direction
Screenshots reais em 16:10 nos cards e 16:9/4:3 na galeria. Fundo neutro com margem interna de 12–20px, borda de navegador mínima apenas quando ajuda a reconhecer o produto. Mesmo enquadramento, borda, radius e tratamento em todos os sistemas. Placeholders devem exibir monograma do produto, categoria e a frase “Screenshot em preparação”, sem simular interface inexistente.

## Graphic Elements
Régua fina, índices `01–09`, pequenos quadrados de 6px, setas lineares, labels mono e marcações de grid pontuais. Usar no máximo dois elementos por seção. Sem ilustrações abstratas, órbitas, partículas ou linhas pseudo-técnicas.

## Personal Brand
- Header/logo: monograma **JG**, por ser imediatamente associado a José Gabriel.
- Hero: **José Gabriel Mendes**.
- Conteúdo formal e footer: **José Gabriel da Silva Mendes**.
- Metadata: **José Gabriel Mendes**.
- Tom: direto, seguro, factual; “desenvolvo” em vez de “sou apaixonado”.

## Favicon
Monograma `JG` geométrico em Manrope 700 dentro de quadrado 32×32 com radius 6px. Light: fundo verde profundo `#294A3A`, letras off-white. Dark: fundo cobre `#D2764F`, letras grafite. Versão 16px simplifica para `J` se a legibilidade do par cair.

## Texture
Textura de papel digital quase imperceptível, apenas no background, opacidade máxima 1.5%, estática e sem imagem pesada. Removida em dark mode e em telas de alta densidade se não for perceptível. Nunca sobre imagens, campos ou modal.

## Art Direction References
Absorver do **Swiss Design**: grid, hierarquia e tipografia; do **editorial contemporâneo**: ritmo, escala e imagem; de **produtos B2B premium**: clareza, estados e confiança; de **estúdios digitais**: assinatura autoral. Evitar do brutalismo: aspereza e legibilidade sacrificada; de SaaS: hero genérico e mosaico de cards; de portfólios dev: terminal falso e estética neon.

## Anti-Patterns
**NÃO FAZER:** 1) roxo/azul neon; 2) gradientes decorativos; 3) glassmorphism; 4) glow; 5) preto absoluto; 6) cards para tudo; 7) cards dentro de cards; 8) sombras grandes; 9) foto circular; 10) terminal falso; 11) barras de habilidade; 12) logos multicoloridos em massa; 13) texto centralizado em todas as seções; 14) emojis como ícones; 15) métricas inventadas; 16) depoimentos fictícios; 17) parallax; 18) bounce; 19) animações infinitas; 20) partículas; 21) 3D decorativo; 22) excesso de pills; 23) cantos excessivamente arredondados; 24) mockups de laptop repetidos; 25) linguagem de “especialista em tudo”; 26) esconder foco; 27) texto cinza de baixo contraste; 28) gradiente no texto; 29) slogans vagos; 30) misturar os dez repositórios como dez projetos.

## Design Tokens
```text
colors: bg, bg-secondary, surface, elevated, text-primary, text-secondary, text-muted, border, accent, accent-hover, accent-soft, success, warning, error
fonts: display=Manrope, body=Source Sans 3, mono=IBM Plex Mono
type: 12, 13, 15, 17, 20, 28, 42, 52, 64, 80
spacing: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120
radius: 4, 6, 8, 10, pill
border: 1px solid border
shadow: sm, md, lg
motion: 160ms, 280ms, 500ms, 700ms; ease-out=(.22,1,.36,1)
breakpoints: 320, 768, 1024, 1440
content: max=1280px, prose=680px
```
Todos os valores de cor serão convertidos para OKLCH nos tokens de implementação, preservando estes HEX como referência visual aprovada.

## Component Inventory
- **Navbar:** navegação sticky; estados inicial/scrolled/mobile/open.
- **BrandMark:** JG; variantes header/favicon.
- **ThemeToggle:** sistema/light/dark inicial; ícone, tooltip e persistência.
- **LanguageSwitcher:** PT/EN/ES; desktop compacto e menu mobile.
- **Button:** primary/secondary/ghost/text; default/hover/focus/active/disabled.
- **SectionHeading:** índice, overline, título e introdução.
- **Badge/SkillTag:** neutral/status/client-project.
- **Availability:** ponto success + texto localizado.
- **PortraitSwitcher:** duas imagens, crossfade e fallback editorial.
- **TechPipeline:** sequência técnica responsiva.
- **ServiceItem:** problema, exemplos, tecnologias e CTA.
- **ProjectCard:** featured/standard/client/compact.
- **ProjectModal:** galeria, conteúdo, stack, links e foco acessível.
- **Gallery:** anterior/próximo/indicadores; single-image sem controles.
- **SkillGroup:** categoria, contexto e tags.
- **ProcessLine:** desktop horizontal/mobile vertical.
- **ExperienceTimeline:** cargo, contexto, período e responsabilidades.
- **EducationItem:** curso, instituição e status.
- **CommercialCTA:** faixa de alto contraste e ação.
- **ContactForm:** campos, estados de foco/erro/sucesso futuro; sem envio fictício.
- **SocialLinks:** GitHub, LinkedIn e email.
- **BackToTop:** ícone, tooltip e visibilidade progressiva.
- **Footer:** identidade, links e copyright.

## Visual Hierarchy
1. Nome e posicionamento; 2. headline orientada a problema; 3. Java/Spring Boot + sistemas sob medida; 4. fotografia e disponibilidade; 5. CTA comercial; 6. serviços; 7. projetos, com Reservas destacado; 8. capacidade técnica; 9. método de trabalho; 10. experiência e formação; 11. contato. O visitante deve compreender a oferta sem rolar; ao rolar, encontra prova, método e meios de contratação.

## Final Design Principles
1. **Clareza antes de efeito.** 2. **Solução antes de tecnologia.** 3. **Prova antes de promessa.** 4. **Backend como especialização; full stack como capacidade.** 5. **Hierarquia por composição, não por decoração.** 6. **Accent sinaliza decisão.** 7. **Todo conteúdo permanece factual.** 8. **Light e dark têm igual qualidade.** 9. **Mobile é composição própria.** 10. **Motion comunica estado.**

### Validação antes da implementação
A implementação só começa após aprovação desta identidade. Antes do código, a auditoria dos repositórios será consolidada em uma matriz de fatos confirmados por produto; qualquer lacuna continuará como placeholder explícito. As fotos e screenshots usarão os caminhos definidos, sem imagens genéricas ou interfaces inventadas.
