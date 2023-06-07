FROM node:latest as backend

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD ["nodemon --watch", "./app.js"]