# API
 🚀 Aplicativo Naruto - API + React Native

Um app simples que lista personagens de Naruto usando uma API fake com JSON Server e React Native.

 📋 Pré-requisitos
- Node.js (v18+)
- npm ou yarn
- React Native CLI (opcional)
- Android Studio/Xcode (para emulador)

 🛠 Como Executar

 1. Iniciar a API Fake (JSON Server)
```bash
 Instale o JSON Server globalmente (se ainda não tiver)
npm install -g json-server

 Na pasta do projeto, inicie o servidor
json-server --watch db.json --port 3001
```
> A API estará disponível em: `http://localhost:3001/personagens`

 2. Configurar o App React Native
```bash
 Instale as dependências
npm install

 (Android) Execute no emulador
npx react-native run-android

 (iOS) Execute no simulador
npx react-native run-ios
```

 3. Estrutura do Projeto
```
/src
|-- /components       Componentes reutilizáveis
|-- /screens          Telas do app
|-- /services         Conexão com a API
|-- /navigation       Config de navegação
```

 🔄 Rotas da API
- `GET /personagens` → Lista todos
- `GET /personagens/:id` → Detalhes de 1 personagem

 🐛 Problemas Comuns
- Erro "Porta 3001 em uso": Mude a porta em `api.js` e no comando do JSON Server.
- Imagens não carregando: Verifique se as URLs em `db.json` são válidas.

 📱 Telas do App
- Home: Lista de personagens em cards
- Details: Detalhes completos do personagem selecionado


Divirta-se! 🎉  

