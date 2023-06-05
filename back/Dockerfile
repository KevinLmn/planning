FROM node:latest as backend

WORKDIR /app

COPY . /app

RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD ["nodemon", "./app.js"]



# CMD ["npm","start"]