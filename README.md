# ⚙️ Instalação de Dependências

Este guia descreve apenas os passos para instalar as dependências necessárias do projeto **Express + TypeScript**.

---

## 📦 1. Inicializar o projeto Node.js

No terminal, execute:

```bash

### cria o package.json
npm init -y 

### instala o express 
npm install express

### adiciona o express ao ts
npm install -D typescript ts-node-dev @types/node @types/express

### cria o arquivo tsconfig.json
npx tsc --init 

### instala o mongoDB 
npm install mongoose
npm install -D @types/mongoose

### instalacao do dotenv
npm install dotenv

### instalacao do bcryptjs
npm install bcryptjs
npm install --save-dev @types/bcryptjs

### instalacao do JWT
npm install jsonwebtoken
npm install -D @types/jsonwebtoken



