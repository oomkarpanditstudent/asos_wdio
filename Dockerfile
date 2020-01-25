FROM node
WORKDIR /usr/src
COPY . .
WORKDIR /usr/src/asos_wdio
RUN npm install