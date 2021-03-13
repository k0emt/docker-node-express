# Redis - App Server example

With this example, use docker compose to spin up a configuration of 1 Redis server and 1-4 app servers

## Running

### One Redis, One App Server

Create everything, including default network: `docker-compose up`

Start in detached mode: `docker-compose up -d`

Again, but rebuild images: `docker-compose up --build -d`

### One Redis, Two App Servers

This section and the [docker-compose.yml](docker-compose.yml) file need to be revised.
Perhaps adding a load balancer?  The port configuration for the app server needs to change in the [Dockerfile](Dockerfile) as well.

With the `--scale` option you can give a number 1-4.  That's because that's how many ports we are providing in the [docker-compose.yml](docker-compose.yml) file (4001-4004).

Spin up 2 instances of the web server:
`docker-compose up --build -d --scale node-app=2`

_Important_: You are _not_ guaranteed to be assigned the port numbers from the compose file in sequence.  You will need to do a `docker ps` to see what local port numbers are being used.

## Viewing the app server

Depending on the number of node-app servers you specify to run and their port assignments:

- <http://localhost:4001>
- <http://localhost:4002>
- <http://localhost:4003>
- <http://localhost:4004>

## Stopping

`docker-compose down`
