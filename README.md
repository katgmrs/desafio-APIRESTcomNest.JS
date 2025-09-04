# 📌 Desafio API

API desenvolvida em **NestJS + TypeScript**, utilizando **MySQL** como banco de dados e autenticação via **JWT**.

---

## 🚀 Tecnologias
- Node.js  
- NestJS  
- TypeScript  
- MySQL  
- JWT  
- Jest (testes)  

---

## ⚙️ Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/desafio-api.git
   cd desafio-api
Instale as dependências:

bash
Copiar código
npm install
Configure o arquivo .env:

env
Copiar código
DB_HOST=localhost

JWT_SECRET=sua_chave_secreta
JWT_EXPIRATION=3600s
▶️ Scripts disponíveis
Compilar o projeto

bash
Copiar código
npm run build
Formatar o código

bash
Copiar código
npm run format
Rodar em desenvolvimento (com reload automático)

bash
Copiar código
npm run start:dev
Rodar em modo debug

bash
Copiar código
npm run start:debug
Rodar em produção

bash
Copiar código
npm run start:prod
Rodar linter

bash
Copiar código
npm run lint
Testes unitários

bash
Copiar código
npm test
Testes com watch

bash
Copiar código
npm run test:watch
Cobertura de testes

bash
Copiar código
npm run test:cov
Testes end-to-end (e2e)

bash
Copiar código
npm run test:e2e
📌 Endpoints
Autenticação
POST /auth/login – Login

POST /auth/register – Registro

Usuários
GET /users – Listar usuários

GET /users/:id – Buscar usuário

POST /users – Criar usuário

PUT /users/:id – Atualizar usuário


DELETE /users/:id – Remover usuário
