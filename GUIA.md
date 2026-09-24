# Guia das escolhas do projeto

Este guia explica o porquê de cada decisão, pra você saber defender o código na apresentação. Leia com o código aberto do lado.

---

## 1. Por que separar `app/` e `screens/`?

- **`src/app/`** é a pasta de **rotas** do Expo Router. O nome do arquivo vira o endereço da tela: `home.jsx` vira `/home` e `details/[id].jsx` vira `/details/1`.
- **`src/screens/`** guarda o **conteúdo** das telas.

Os arquivos de rota só fazem `export default Home`. Assim a navegação fica de um lado e o layout de outro. Se um dia trocar a biblioteca de navegação, as telas não precisam mudar.

> O professor liberou IA pra navegação. Mesmo assim, é bom saber que usamos **Expo Router** com **Stack** (pilha): cada tela nova entra por cima e o "voltar" tira ela da pilha.

## 2. Navegação (resumo)

| Ação | Código | Por quê |
|---|---|---|
| Login → Home | `router.replace('/home')` | `replace` troca a tela, então o "voltar" não retorna ao login |
| Home → Agendar | `router.push('/schedule')` | `push` empilha a tela, e o "voltar" funciona |
| Home → Detalhes | `router.push({ pathname: '/details/[id]', params: { id } })` | passa o id da partida pela rota |
| Voltar (Header) | `router.back()` | tira a tela atual da pilha |

Em Detalhes, o id é lido com `useLocalSearchParams()`.

## 3. Por que cada componente tem `index.jsx` + `styles.js`?

- `index.jsx` tem a **estrutura** (o que aparece na tela).
- `styles.js` tem a **aparência** (`StyleSheet.create`).

Separar deixa o arquivo principal curto e fácil de ler. O `StyleSheet.create` também valida os estilos e é o padrão recomendado no React Native.

## 4. Por que um `theme.js`?

Todas as cores e fontes do Figma ficam num só lugar. Nenhum componente usa `'#E51C44'` direto: todos usam `theme.colors.primary`.

- Se o design mudar uma cor, você muda em **um lugar só**.
- Os nomes (`secondary100`, `heading`, `highlight`…) são os mesmos do Figma.

### E o `global.js`?

Estilos que se repetem em vários componentes ficam em `src/global/styles/global.js` (`globalStyles`):

| Estilo | O que é | Onde é usado |
|---|---|---|
| `title` | Rajdhani 18, cor de título | ListHeader, Appointment, Member, GuildSelect, labels do Agendar |
| `caption` | Inter 13, cor secundária | ListHeader, Appointment, Member, GuildSelect, Profile, "Max 100 caracteres" |
| `input` | caixa de campo (fundo, borda, raio, fonte) | SmallInput e TextArea |
| `button` / `buttonTitle` | botão vermelho de 56 de altura e o texto dele | Button e ButtonIcon |

Cada componente combina o estilo global com o próprio usando um array, e o último do array ganha quando os dois definem a mesma coisa:

```tsx
<Text style={[globalStyles.caption, styles.category]}>
```

O `theme.js` guarda os **valores** (cores e fontes); o `global.js` guarda **estilos prontos** montados com esses valores. O que só aparece em um componente fica no `styles.js` dele.

## 5. Como decidi o que virar componente

Regra usada: **se aparece em mais de uma tela ou se repete numa lista, vira componente.**

| Componente | Onde aparece | Observação |
|---|---|---|
| `Background` | todas as telas | fundo em degradê (`LinearGradient`) |
| `ButtonIcon` | Login e Detalhes | botão com ícone do Discord |
| `Button` | Agendar | botão simples |
| `ButtonAdd` | Home | quadrado vermelho com "+" |
| `Profile` + `Avatar` | Home | Avatar também é usado no `Member` |
| `Category` | dentro do `CategorySelect` | um card de categoria |
| `CategorySelect` | Home e Agendar | lista horizontal de categorias |
| `ListHeader` | Home e Detalhes | "Partidas agendadas / Total 6" |
| `ListDivider` | Home e Detalhes | linha entre itens |
| `Appointment` | Home | item da lista de partidas |
| `GuildIcon` | Appointment e Agendar | ícone do servidor |
| `Header` | Detalhes e Agendar | título + voltar + ação opcional |
| `Member` | Detalhes | jogador com status |
| `GuildSelect` | Agendar | campo "servidor selecionado" |
| `SmallInput` / `TextArea` | Agendar | campos do formulário |

### Props que valem explicar
- **`Header`** recebe `action?: ReactNode`. Em Detalhes passamos o botão de compartilhar, e em Agendar não passamos nada. Quando não tem ação, um `View` vazio de 24px segura o espaço pra o título continuar centralizado.
- **`ListDivider`** tem `isCentered`. Na Home a linha fica mais perto do item de cima e começa no alinhamento do texto; em Detalhes fica no meio e começa no nome do jogador.
- **`ListHeader`** aceita `style`, porque o espaço acima dele muda de tela pra tela (40 na Home, 24 em Detalhes).
- **`Category`** tem `hasCheckBox` e `dimmed`. Em Agendar aparece o quadradinho, e na Home não. `dimmed` deixa o fundo e o ícone com 50% de opacidade quando o card não está selecionado; o título continua forte, igual ao Figma.
- **`Header`** desenha uma sombra em degradê logo abaixo dele (`position: 'absolute'` + `top: '100%'`), que aparece por cima do banner em Detalhes e do conteúdo em Agendar.
- Os botões recebem `...rest`, então aceitam qualquer prop do `TouchableOpacity` (como `onPress`) sem precisar declarar uma por uma.

## 6. Estado da categoria (o ponto principal da tela Agendar)

```tsx
const [category, setCategory] = useState('1');
<CategorySelect hasCheckBox categorySelected={category} setCategory={setCategory} />
```

- A tela começa com "Ranqueada" selecionada, igual ao frame "Agendar - Servidor selecionado" do Figma.
- O **estado fica na tela**, e o `CategorySelect` só recebe o valor e a função. Isso se chama "levantar o estado" (*lifting state up*): o componente fica reutilizável, e cada tela decide o que fazer com a seleção.
- Cada `Category` recebe `checked={category.id === categorySelected}`.
- Visual do card **selecionado**: borda mais clara (`highlightBorder`), fundo e ícone com opacidade cheia e checkbox vermelho.
- Visual do card **não selecionado**: fundo e ícone com opacidade 0.5 e checkbox vazio.
- Na **Home** o toque funciona como filtro: tocar de novo na mesma categoria desmarca (`current === id ? '' : id`).

## 7. Detalhes de estilização que podem perguntar

- **Borda em degradê** (Avatar, Category, ícone da partida): um `LinearGradient` maior por fora e o conteúdo um pouco menor por dentro. A "sobra" parece uma borda com gradiente, que o `borderColor` não consegue fazer.
- **Safe area**: `useSafeAreaInsets()` dá o tamanho da barra de status e da barra inferior do celular. Somamos isso nas margens pra nada ficar escondido atrás do notch.
- **Ícones SVG**: cada `.svg` do Figma virou um componente com `SvgXml` (`src/assets/icons`). Não precisa configurar nada extra no Metro e funciona no Expo Go. O `PlayerIcon` usa `currentColor`, então dá pra mudar a cor pela prop `color` (vermelho = Anfitrião, verde = Visitante).
- **Fontes**: Rajdhani (títulos) e Inter (textos) via `@expo-google-fonts`. O `_layout.jsx` segura a splash até elas carregarem, pra não aparecer a fonte padrão por um instante.
- **`KeyboardAvoidingView`** na tela Agendar: empurra o conteúdo pra cima quando o teclado abre.
- **`textAlignVertical: 'top'`** no TextArea: no Android o texto começaria no meio da caixa.
- **`FlatList`** nas listas em vez de `.map`: só renderiza o que está visível, o que é melhor pra listas grandes.

## 8. Dados e imagens

Tudo vem de `src/data/mock.js` Se um dia tiver API, só troca de onde vêm os dados, e os componentes continuam iguais.

As imagens (foto do perfil, ícones dos servidores, fotos dos jogadores, ilustração do login e banner) foram exportadas do próprio Figma e ficam em `src/assets/images`. Elas são importadas com `require(...)`, então o app funciona sem internet.

## 9. Medidas

Os espaçamentos foram tirados do Figma (tela de 375 x 812). Alguns exemplos que valem saber:

- Header: altura de 60 + a barra de status, título Rajdhani 20.
- Cards de categoria: 104 x 120, ícone 48 x 48 a 20 do topo, 8 de espaço entre eles.
- Item da lista: imagem 64 x 68 com borda de 1 em degradê, texto a 20 da imagem.
- Botões: altura 56, raio 8.
- O login usa uma posição fixa a partir do topo (a ilustração começa em 100) porque o Figma foi desenhado assim.
