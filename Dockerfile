FROM node:14.15.5-alpine3.10
WORKDIR /usr/src/app
COPY package*.json ./

# RUN apt-get update -y && apt-get dist-upgrade -y && \
# apt-get install -y --no-install-recommends paxctl && \
# paxctl -mC `which node`

RUN npm install
COPY index.js .

EXPOSE 3000
CMD [ "npm", "start" ]
