FROM node:alpine

# Create app directory
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .env ./dist

EXPOSE 3000

