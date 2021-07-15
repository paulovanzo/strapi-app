FROM node:14.3-alpine

RUN apk add bash

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json ./

RUN yarn

COPY . /usr/app

EXPOSE 1337

CMD bash -c "yarn build && yarn develop"
