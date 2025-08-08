# 🐾 Get A Pet - Plataforma de Adoção de Animais

<div align="center">

![Get A Pet Logo](frontend/src/assets/img/logo.png)

**Uma plataforma completa para adoção responsável de animais de estimação**

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-orange.svg)](https://mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-red.svg)](https://jwt.io/)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [API Endpoints](#-api-endpoints)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **Get A Pet** é uma plataforma web completa desenvolvida para facilitar a adoção responsável de animais de estimação. A aplicação conecta pessoas que desejam adotar um pet com aquelas que precisam encontrar um lar amoroso para seus animais.

### 🎨 Características Principais

- **Interface moderna e responsiva** com design intuitivo
- **Sistema de autenticação seguro** com JWT
- **Upload de imagens** para pets e usuários
- **Sistema de adoção** com controle de status
- **Perfis personalizados** para usuários e pets
- **Navegação fluida** com React Router

---

## ✨ Funcionalidades

### 👤 Sistema de Usuários
- ✅ Cadastro e login de usuários
- ✅ Perfil personalizado com foto
- ✅ Edição de dados pessoais
- ✅ Sistema de autenticação JWT

### 🐕 Gestão de Pets
- ✅ Cadastro de pets para adoção
- ✅ Upload de múltiplas imagens
- ✅ Edição de informações dos pets
- ✅ Visualização detalhada de cada pet
- ✅ Controle de disponibilidade

### 🏠 Sistema de Adoção
- ✅ Solicitação de adoção
- ✅ Acompanhamento de adoções
- ✅ Histórico de pets adotados
- ✅ Status de disponibilidade

### 🎨 Interface
- ✅ Design responsivo
- ✅ Navegação intuitiva
- ✅ Mensagens de feedback
- ✅ Componentes reutilizáveis

---

## 🛠️ Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | 19.1.0 | Biblioteca JavaScript para interfaces |
| **React Router DOM** | 7.6.3 | Roteamento para aplicações React |
| **Axios** | 1.10.0 | Cliente HTTP para requisições |
| **React Icons** | 5.5.0 | Biblioteca de ícones |
| **CSS Modules** | - | Estilização modular |

### Backend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Node.js** | - | Runtime JavaScript |
| **Express** | 5.1.0 | Framework web para Node.js |
| **MongoDB** | - | Banco de dados NoSQL |
| **Mongoose** | 8.15.1 | ODM para MongoDB |
| **JWT** | 9.0.2 | Autenticação com tokens |
| **Multer** | 2.0.0 | Middleware para upload de arquivos |
| **Bcrypt** | 6.0.0 | Criptografia de senhas |
| **CORS** | 2.8.5 | Middleware para CORS |

### Ferramentas de Desenvolvimento
- **Nodemon** - Reinicialização automática do servidor
- **React Scripts** - Scripts de desenvolvimento React
- **Cookie Parser** - Parsing de cookies

---

## 📁 Estrutura do Projeto

```
GET_A_PET/
├── 📁 backend/                 # API REST
│   ├── 📁 controllers/         # Controladores da API
│   ├── 📁 db/                  # Configuração do banco
│   ├── 📁 helpers/             # Funções auxiliares
│   ├── 📁 models/              # Modelos do MongoDB
│   ├── 📁 routes/              # Rotas da API
│   ├── 📁 public/              # Arquivos estáticos
│   └── 📁 uploads/             # Upload de arquivos
│
└── 📁 frontend/                # Aplicação React
    ├── 📁 src/
    │   ├── 📁 components/      # Componentes React
    │   │   ├── 📁 form/        # Componentes de formulário
    │   │   ├── 📁 layout/      # Componentes de layout
    │   │   └── 📁 pages/       # Páginas da aplicação
    │   ├── 📁 context/         # Context API
    │   ├── 📁 hooks/           # Custom hooks
    │   └── 📁 utils/           # Utilitários
    └── 📁 public/              # Arquivos públicos
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MongoDB instalado e rodando
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/get-a-pet.git
cd get-a-pet
```

### 2. Configure o Backend
```bash
cd backend
npm install
```

### 3. Configure o Frontend
```bash
cd ../frontend
npm install
```

### 4. Configure o Banco de Dados
Certifique-se de que o MongoDB está rodando em sua máquina ou configure a string de conexão no arquivo `backend/db/conn.js`.

### 5. Execute a Aplicação

#### Backend (Terminal 1)
```bash
cd backend
npm start
```
O servidor estará rodando em `http://localhost:5000`

#### Frontend (Terminal 2)
```bash
cd frontend
npm start
```
A aplicação estará disponível em `http://localhost:3000`

---

## 🔌 API Endpoints

### Usuários
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/users/register` | Cadastro de usuário |
| `POST` | `/users/login` | Login de usuário |
| `GET` | `/users/profile` | Perfil do usuário |
| `PATCH` | `/users/profile` | Atualizar perfil |
| `POST` | `/users/profile` | Upload de imagem |

### Pets
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/pets` | Listar todos os pets |
| `GET` | `/pets/mypets` | Pets do usuário |
| `GET` | `/pets/myadoptions` | Adoções do usuário |
| `GET` | `/pets/:id` | Detalhes de um pet |
| `POST` | `/pets/create` | Criar novo pet |
| `PATCH` | `/pets/:id` | Atualizar pet |
| `DELETE` | `/pets/:id` | Remover pet |
| `PATCH` | `/pets/:id/adopt` | Adotar pet |

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- Use ESLint e Prettier
- Siga as convenções do React
- Mantenha o código limpo e documentado
- Teste suas funcionalidades

---

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvedor

**Allan** - Desenvolvedor Full Stack

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

</div> 