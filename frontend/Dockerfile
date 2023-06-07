# pull da imagem oficial do node
FROM node:18.12-alpine

# defini a pasta de trabalho 
WORKDIR /app

# add `/app/node_modules/.bin` nas variáveis de ambiente de $PATH
ENV PATH /app/node_modules/.bin:$PATH

# instala as dependencias da aplicação com o yarn 
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn add vite --dev

# copia todos os arquivos para pasta do container
COPY . ./

# inicia a aplicação
CMD ["yarn", "run", "dev"] 