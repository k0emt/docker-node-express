FROM dhi.io/node:20-alpine3.22

WORKDIR '/app'

COPY package*.json ./
RUN npm ci
COPY . .

CMD ["npm","start"]