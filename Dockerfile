FROM node:latest as frontend

WORKDIR /app

COPY ./front /app/

RUN npm install
RUN npm run build

FROM node:latest as backend

WORKDIR /app

COPY ./back /app

RUN npm install

FROM node:latest
WORKDIR /app

EXPOSE 3000

# CMD ["node", "./back/app.ts"]
CMD ["npm","start"]