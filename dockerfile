FROM ubuntu:latest AS nobuntu
LABEL author="MapsPeople"

RUN apt-get update
RUN apt-get install curl -y
RUN apt-get install gnupg2 -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y fontconfig

WORKDIR /usr/src/app

RUN mkdir img

COPY package*.json ./

RUN npm install

COPY . .  

RUN node app

