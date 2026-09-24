# GamePlay

Telas do protótipo **GamePlay (NLW Together)** em React Native + Expo:

- Login
- Home
- Detalhes do servidor
- Agendar partida (com servidor selecionado e seleção de categoria)

As telas não têm back-end. Os dados vêm de `src/data/mock.js`, as imagens foram exportadas do Figma (`src/assets/images`) e o que funciona é a navegação e a seleção de categoria.

## Como rodar

Você precisa do Node.js instalado e do app **Expo Go** no celular.

```bash
npm install
npx expo start
```

Depois escaneie o QR Code com o Expo Go (no iPhone, pela câmera). O celular e o computador precisam estar na mesma rede Wi-Fi. Se a rede bloquear a conexão, use `npx expo start --tunnel`.

## Fluxo de navegação

```
Login ──(Entrar com Discord)──▶ Home ──(+)──────────▶ Agendar
                                  └──(toque na partida)──▶ Detalhes
```

## Estrutura de pastas

```
src/
├── app/            # ROTAS (Expo Router): cada arquivo é uma tela/URL
│   ├── _layout.jsx # carrega as fontes e define a navegação em pilha (Stack)
│   ├── index.jsx   # "/"            -> Login
│   ├── home.jsx    # "/home"        -> Home
│   ├── schedule.jsx# "/schedule"    -> Agendar
│   └── details/[id].jsx # "/details/1" -> Detalhes
├── screens/        # o conteúdo de cada tela (index.jsx + styles.js)
├── components/     # peças reutilizáveis (index.jsx + styles.js)
├── assets/         # imagens (.png) e ícones (.svg virados componentes)
├── global/styles/  # theme.js: cores e fontes do Figma
├── data/           # dados fixos (mock)
└── utils/          # lista de categorias
```

Veja o arquivo **GUIA.md** para entender o porquê de cada escolha.
