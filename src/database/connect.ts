// src/database/connect.ts
import mongoose from "mongoose";

export async function connectDB(res: any) {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      res.send(mongoUri);
      //throw new Error("⚠️ Variável MONGODB_URI não definida no .env");
    }

    await mongoose.connect(mongoUri);
    //console.log("✅ Conectado ao MongoDB Atlas com sucesso!");
    res.send("✅ Conectado ao MongoDB Atlas com sucesso!");
  } catch (error) {
    //console.error("❌ Erro ao conectar ao MongoDB:", error);
    res.send("❌ Erro ao conectar ao MongoDB:");
    //process.exit(1); // Encerra a aplicação em caso de falha
  }
}
