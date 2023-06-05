# FROM node:latest as frontend

# WORKDIR /app

# COPY ./front /app/

# RUN npm install
# RUN npm run build

FROM node:latest as backend

WORKDIR /app

COPY ./back /app

RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD ["nodemon", "./app.js"]



# CMD ["npm","start"]