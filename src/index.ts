// src/index.ts
import dotenv from "dotenv";
dotenv.config(); // ← Carrega as variáveis do .env

import express from "express";
import { connectDB } from "./database/connect"; // ← Função de conexão

const app = express();

// Middlewares globais
app.use(express.json());

// Conectar ao banco MongoDB Atlas
//connectDB(); // ← Chamada da conexão

// Rotas simples de teste
app.get("/", (req, res) => {
  res.send(process.env.MONGODB_URI.toString());
  connectDB();
});

// Porta definida no .env ou 3000 por padrão
const PORT = 3030;

// Inicializa o servidor Express
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
