FROM node:20.11-bullseye-slim

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

EXPOSE 8081

CMD [ "node", "dist/src/index.js" ]