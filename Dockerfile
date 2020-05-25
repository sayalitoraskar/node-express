FROM node:12
RUN apt-get update
RUN apt-get install -y git
RUN mkdir -p /home/Downloads/node/app
WORKDIR /home/Downloads/node/app
RUN git clone https://github.com/sayalitoraskar/node-express.git
WORKDIR /home/Downloads/node/app/node-express
RUN npm install
CMD ["npm" , "start"]
EXPOSE 3000
