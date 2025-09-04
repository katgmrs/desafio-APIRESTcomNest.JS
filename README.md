# API RESTful de Gerenciamento de Usuários com JWT

Este projeto é uma API RESTful robusta e segura para gerenciar usuários em uma plataforma digital, utilizando Node.js, Express e MySQL. A autenticação é feita com JSON Web Tokens (JWT), garantindo segurança no acesso e manipulação de dados sensíveis.

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- JSON Web Token (JWT)
- MySQL com pool de conexões
- bcryptjs para hash de senhas
- express-validator para validação dos dados
- helmet, cors e express-rate-limit para segurança
- dotenv para variáveis de ambiente

---

## Funcionalidades Principais

- Cadastro e login seguro de usuários com validação e hash de senhas
- Proteção das rotas por autenticação JWT
- Gestão completa de usuários (CRUD)
- Sistema de roles (usuário comum e administrador) para controle de acesso
- Paginação e filtros na listagem de usuários
- Soft delete para manter integridade e auditoria
- Rate limiting para proteção contra ataques brute force
- Tratamento centralizado de erros e respostas padronizadas
- Documentação integrada via endpoint `/api/docs`

---

## Como Usar

### Instalação

1. Clone o repositório:
git clone https://github.com/katgmrs/desafio-APIRESTcomNest.JS.git

2. Acesse o diretório do projeto:
cd api-usuarios-jwt

3. Instale as dependências:
npm install

4. Configure o banco de dados MySQL e crie uma database chamada `usuarios_api`.
5. Configure as variáveis de ambiente copiando `.env.example` para `.env` e ajustando conforme seu ambiente.
6. Inicie o servidor em modo desenvolvimento:
npm run dev

---

### Endpoints Principais

- **Registro de Usuário:** `POST /api/auth/register`
- **Login:** `POST /api/auth/login`
- **Perfil do Usuário Logado:** `GET /api/auth/profile`
- **Alterar Senha:** `PUT /api/auth/change-password`
- **Logout:** `POST /api/auth/logout`
- **Listagem de Usuários:** `GET /api/users`
- **Obter Usuário por ID:** `GET /api/users/:id`
- **Criar Usuário (Admin):** `POST /api/users`
- **Atualizar Usuário:** `PUT /api/users/:id`
- **Deletar Usuário (soft delete - Admin):** `DELETE /api/users/:id`

Para mais detalhes, consulte a documentação disponível no endpoint:  
`GET /api/docs`

---

## Segurança

- Senhas armazenadas com hash seguro via bcrypt
- Tokens JWT válidos por 24 horas
- Rate limiting para limitar requisições por IP
- Validação consistente dos dados de entrada
- Controle de acesso por roles para proteger dados e funcionalidades sensíveis

---

## Estrutura do Projeto

├── src/
│ ├── config/ # Configurações do DB e JWT
│ ├── controllers/ # Lógica da aplicação
│ ├── middleware/ # Middlewares (autenticação, validação, erros)
│ ├── models/ # Interação com banco de dados
│ ├── routes/ # Definição das rotas
│ └── utils/ # Funções auxiliares
├── .env # Variáveis de ambiente (não versionado)
├── server.js # Arquivo principal do servidor
└── package.json # Dependências e scripts
