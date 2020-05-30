# docker

## tips

After installing docker, add the current user to the docker group.  You'll need to log out and back in afterwards.

`sudo usermod -a -G docker $USER`

Spin up a container, detached, expose ports inside/outside? name it, and what image

`docker run -d -p 27017-27019:27017-27019 --name mongodb mongo`

In the above `mongodb` is the container name and `mongo` is the image name

Connect to the docker instance and run a shell there, then can do `mongo`

`docker exec -it mongodb bash`

## useful commands

```bash
docker images
docker image ls
docker container ls --all
docker start containerName
docker stop containerName
docker stats
docker ps
docker ps -a   to see all containers
docker logs <container-name> -f
```

options -d detach, naming.

Docker commands for the container & working with dockerhub.
create a docker hub account
build
push
pull
run

## maintaining images

Update all images that don't have a `<none>` tag on them.
Remove all images that do have a `<none>` tag on them.

```bash
docker images --format "{{.Repository}}:{{.Tag}}" | grep --invert-match '<none>' | xargs -L1 docker pull
docker images --format "{{.Tag}}:{{.ID}}" | grep '<none>' | cut -d : -f2- |  xargs -L1 docker image rm
```

## persistent storage

TBD

## app in a container

TBD: docker file

- ARG & ENV
- WORKDIR
- COPY
- RUN
- `--conectRetries`

## docker compose

TBD

## TBD: integrate all this in --------------------------------
# Some helpful mongo container docker commands

Get latest image of mongoDB

`docker pull mongo`

Spin up a new container named `my_mongo` from image `mongo` Mapping and exposing ports 27017-27019 from the container to the host OS:
`docker run -d -p 27017-27019:27017-27019 --name my_mongo mongo`

Get an interactive mongo shell in the container: `docker exec -it my_mongo bash`

Spin up a container that persists to host drive - no ports exposed

```bash
docker run --rm --name temp-mongo -v $HOME/Docker/Volumes/Mongodb:/data/db -d mongo

docker exec -it temp-mongo mongo
```

`docker stop my_mongo`

`docker start my_mongo`

`docker ps`

`docker images`

`docker container ls --all`

Database import
`mongoimport --db=graphql --collection=trolls --file=trolls.json --jsonArray`

## Some helpful postgresql container docker commands

Get latest image of PostgresQL

`docker pull postgres`

This command removes the container after the run, it maps data to a "volumes" directory
`docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/Docker/Volumes/Postgres:/var/lib/postgresql/data postgres`

I'm doing this, spin up a new container named `my_pg` from image `postgres` Mapping and exposing port 5432 from the container to the host OS:
`docker run --name my_pg -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres`

Get an interactive shell in the container: `docker exec -it my_pg bash`

`docker stop my_pg`

`docker start my_pg`

`docker ps`

`docker images`

`docker container ls --all`

Look for children of an image given the parent hash
```bash
docker inspect --format='{{.Id}} {{.Parent}}' \
    $(docker images --filter since=PARENT_HASH --quiet)
```

## AWS

dockerrun.aws.json for when deploying to ELB

## Resources

[JSON to postgresql](https://stackoverflow.com/questions/33129526/loading-json-data-from-a-file-into-postgres)

[pgAdmin 4 Install info](https://wiki.postgresql.org/wiki/Apt)

## TBD: integrate all this in --------------------------------

## images

node, r-base
python, python:2.7-slim, python:3.8-slim
mongo, mysql, postgres, redis, amazon/dynamodb-local

[GraphDB docker image build repo](https://github.com/Ontotext-AD/graphdb-docker)

## Reference articles

[installing docker on Pop!_OS](https://medium.com/@Grigorkh/how-to-install-docker-on-ubuntu-19-04-7ccfeda5935)

[nodeJS in docker](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/)

[mongoDB in docker](https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/)

[postgreSQL in docker](https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198)

[Docker CLI reference](https://docs.docker.com/engine/reference/run/)

# Setting up docker image to use local/shared storage

Do this when you want to update your container but have the files it uses persist.
For example this is a common thing with Postgres and mongoDB files/images.
