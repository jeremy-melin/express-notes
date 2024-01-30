FROM node:20.11-bullseye-slim

WORKDIR /server
COPY . .
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]