FROM node:latest as frontend

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN npm run build

EXPOSE 5000


CMD ["npm", "start"]



