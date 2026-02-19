FROM dhi.io/node:20-alpine3.22

WORKDIR '/app'

COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY index.js .

EXPOSE 8081

CMD ["npm","start"]