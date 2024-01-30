FROM node:20.11-bullseye-slim

WORKDIR /frontend
COPY . .
RUN npm install

EXPOSE 5173

CMD [ "npm", "dev" ]