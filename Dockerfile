FROM node:latest
MAINTAINER dsluijk

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY dist /usr/src/app/dist

CMD [ "npm", "start" ]
