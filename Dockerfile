FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY dist ./

CMD ["node", "src/main/server.js"]

EXPOSE 3000

