FROM node
WORKDIR /usr/src
RUN git clone https://github.com/oomkarpanditstudent/asos_wdio.git
WORKDIR /usr/src/asos_wdio
RUN npm install