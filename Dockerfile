# Imagem base oficial do Node
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta usada pelo servidor (ajuste se for diferente)
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
