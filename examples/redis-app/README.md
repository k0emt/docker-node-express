# Redis - App Server example

With this example, use docker compose to spin up a configuration of 1 Redis server and 1-4 app servers

## Running

### One Redis, One App Server

create everything, including default network: `docker-compose up`

start in detached mode: `docker-compose up -d`

again, but rebuild images: `docker-compose up --build`

### One Redis, Two App Servers

With the `scale` option below you can give a number 1-4.  That's because that's how many ports we are providing in the `docker-compose.yml` file.

multiple instances of the web server `docker-compose up -d --scale node-app=2`

## Viewing the app server

Depending on the number of node-app servers you specify to run:

- <http://localhost:4001>
- <http://localhost:4002>
- <http://localhost:4003>
- <http://localhost:4004>

## Stopping

`docker-compose down`
