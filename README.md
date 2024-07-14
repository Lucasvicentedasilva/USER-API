# USER-API
 Esta é uma API para gerenciamento de usuários, construída com Node.js, Express, Prisma ORM e documentada com Swagger.


Sumário
    Instalação
    Uso
    Endpoints
    Estrutura do Projeto
    Documentação da API
    Contribuição
    Licença

## Instalação

### Pré-requisitos

- Node.js
- NPM
- Prisma CLI


### Executando o projeto

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio
```

2. Instale as dependências
```bash
npm install
```

3. Crie um arquivo .env com as seguintes variáveis de ambiente:

```
DATABASE_URL=
```

4. Execute o projeto
```bash
npm run dev
```

## Uso
Para utilizar a API, basta acessar o endereço http://localhost:3000/api/docs

O servidor está rodando em http://localhost:8000

## Endpoints
A API possui os seguintes endpoints:

### POST /users
Cria um novo usuário
#### Request
| Nome | Tipo | Descrição |
| --- | --- | --- |
| name | string | Nome do usuário |
| email | string | Email do usuário |
| password | string | Senha do usuário |

#### Response

201 - Criado com sucesso
400 - Falha na criação
500 - Erro interno

### GET /users
Retorna uma lista de usuários
#### Request

URL: /usuarios
Método: GET
Respostas:

#### Response
200 - Lista de usuários
500 - Erro interno

### GET /users/:id
Retorna um usuário específico
#### Request
URL: /usuarios/:id
Método: GET

#### Response
200 - Usuário encontrado
404 - Usuário não encontrado
500 - Erro interno

### PUT /users/:id
Atualiza um usuário
#### Request
URL: /usuarios/:id
Método: PUT

Corpo da Requisição:


{
  "name": "string",
  "email": "string",
  "password": "string"
}


#### Response
200 - Usuário atualizado com sucesso
404 - Usuário não encontrado
500 - Erro interno

### DELETE /users/:id
Deleta um usuário
#### Request

id (obrigatório): ID do usuário.

#### Response
200 - Usuário deletado com sucesso
404 - Usuário não encontrado
500 - Erro interno

## Estrutura do Projeto

├── controllers
│   └── userController.js
├── prisma
│   └── client.js
├── routes
│   └── userRoutes.js
├── .env
├── package.json
├── README.md
└── swagger.json

## Documentação da API

A documentação da API está disponível em http://localhost:8000/api/docs
