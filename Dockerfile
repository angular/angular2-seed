FROM node:7.0.0
MAINTAINER James Byars <jbyars4ku@gmail.com>

RUN apt-get update -y && apt-get install -y vim

WORKDIR /home
RUN git clone https://github.com/angular/angular2-seed.git

WORKDIR /home/angular2-seed
COPY config/package.json .
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
