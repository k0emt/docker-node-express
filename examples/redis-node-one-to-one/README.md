# Redis - App Server example

With this example, use docker compose to spin up a configuration of 1 Redis server and 1 app server

## Set up

## Running

### One Redis, One App Server

`docker-compose up`

- pulls down redis image
- builds local app using dockerfile with . for context
- sets up default network

Same as above, but start in detached mode: `docker-compose up -d`

Detached and force a build with a rebuild of images: `docker-compose up -d --build`

## Viewing the app server

In the docker-compose.yml file we mapped the web servers port 8081 to our local port 4001:

- <http://localhost:4001>

## Stopping

From this project directory, in either a new terminal or the current one (if you ran in detached mode):

`docker-compose down`
