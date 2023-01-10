FROM node:18

WORKDIR /usr/people-server/src

COPY package*.json ./

RUN npm install

COPY . .
CMD npm start