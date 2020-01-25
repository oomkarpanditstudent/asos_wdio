FROM node
WORKDIR /usr/src/asos
RUN git clone https://github.com/oomkarpanditstudent/asos_wdio.git 
WORKDIR /usr/src/asos/asos_wdio
RUN npm install