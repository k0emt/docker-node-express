FROM dhi.io/node:20-alpine3.22

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
