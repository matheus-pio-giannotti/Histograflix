
# Histógraflix 📚🎥  

Histógraflix é uma plataforma de streaming dedicada a conteúdos educacionais de História e Geografia. Inspirado em serviços de streaming populares, nosso objetivo é oferecer materiais ricos e interativos para fomentar o aprendizado de forma acessível e dinâmica.  

---

## 🛠 Funcionalidades  

- Acesso a conteúdos de História e Geografia selecionados do YouTube.
- Adição de conteúdos de História e Geografia selecionados do YouTube. 

---

## 🚀 Tecnologias Utilizadas  

- **Framework Frontend**: [React](https://reactjs.org/)  
- **Estilização**: [Styled Components](https://styled-components.com/)  
- **Gerenciamento de Rotas**: [React Router DOM](https://reactrouter.com/)  
- **API Simulada**: [JSON Server](https://github.com/typicode/json-server)  
- **Ícones**: [React Icons](https://react-icons.github.io/react-icons/)  
- **Validação de Propriedades**: [@emotion/is-prop-valid](https://emotion.sh/docs/@emotion/is-prop-valid)  

---

## 📂 Estrutura do Projeto  

```plaintext
Histógraflix/
├── node_modules/        # Dependências instaladas via npm
├── public/              # Recursos estáticos
│   ├── assets/          # Arquivos estáticos
│       ├── icons/       # Ícones usados no projeto
│           ├── down.png
│           ├── github.png
│           ├── histograflix.png
│           ├── instagram.png
│           ├── linkedin.png
│           ├── up.png
│           └── whatsapp.png
├── src/                 # Código fonte principal
│   ├── components/      # Componentes reutilizáveis
│       ├── Card/                # Componente Card
│           └── index.jsx
│       ├── CardList/            # Componente CardList
│           └── index.jsx
│       ├── DropDown/            # Componente DropDown
│           └── index.jsx
│       ├── EditForm/            # Componente EditForm
│           └── index.jsx
│       ├── EditModal/           # Componente EditModal
│           └── index.jsx
│       ├── Footer/              # Componente Footer
│           └── index.jsx
│       ├── Form/                # Componente Form
│           └── index.jsx
│       ├── GlobalStyle/         # Estilos globais
│           ├── index.jsx
│           ├── Source/
│               ├── Roboto-Bold.ttf
│               └── Roboto-Regular.ttf
│       ├── Header/              # Componente Header
│           └── index.jsx
│       ├── InputText/           # Componente InputText
│           └── index.jsx
│       ├── Logo/                # Componente Logo
│           └── index.jsx
│       ├── NavLink/             # Componente NavLink
│           └── index.jsx
│       ├── NotificationBanner/  # Componente NotificationBanner
│           └── index.jsx
│       ├── PlayerModal/         # Componente PlayerModal
│           └── index.jsx
│       └── TextArea/            # Componente TextArea
│           └── index.jsx
│   ├── json/            # Arquivos JSON
│       └── db.json      # Base de dados local
│   ├── pages/           # Páginas da aplicação
│       ├── Home/                # Página inicial
│           └── index.jsx
│       ├── NewVideo/            # Página de novo vídeo
│           └── index.jsx
│       └── NotFound/            # Página de erro 404
│           └── index.jsx
│   ├── App.jsx          # Componente raiz da aplicação
│   └── main.jsx         # Arquivo de entrada do React
├── .gitignore           # Arquivos e pastas ignorados pelo Git
├── eslint.config.js     # Configuração do ESLint
├── index.html           # Arquivo HTML principal
├── package.json         # Configurações do Node.js
├── package-lock.json    # Controle de versões das dependências
├── README.md            # Documentação do projeto
└── vite.config.js       # Configuração do Vite
```

---

## 🚀 Como Executar  

### Pré-requisitos  

Certifique-se de ter o **Node.js** instalado em sua máquina.  

### Instalação  

1. Clone o repositório:  
   ```bash
   git clone https://github.com//histograflix.git
   cd histograflix
   ```

2. Instale as dependências necessárias:  
   ```bash
   npm install
   ```

3. Instale as bibliotecas utilizadas no projeto:  
   - **Styled Components**:  
     ```bash
     npm install styled-components
     ```
   - **@emotion/is-prop-valid**:  
     ```bash
     npm install @emotion/is-prop-valid
     ```
   - **React Icons**:  
     ```bash
     npm install react-icons
     ```
   - **React Router DOM**:  
     ```bash
     npm install react-router-dom
     ```
   - **JSON Server** (instalação global):  
     ```bash
     npm install -g json-server
     ```

### Inicialização  

1. Inicie o servidor JSON:  
   ```bash
   json-server --watch src/json/db.json --port 5000
   ```

2. Inicie o projeto:  
   ```bash
   npm run dev
   ```

3. Acesse a aplicação no navegador em `http://localhost:3000`.  

---

## 📝 Licença  

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).  

---

Desfrute de uma experiência de aprendizado incrível com o **Histógraflix**! 🌍📖
