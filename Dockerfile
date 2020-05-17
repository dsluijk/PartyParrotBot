FROM node:latest
MAINTAINER dsluijk

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY tsconfig.json .
COPY config ./config
COPY src ./src

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
