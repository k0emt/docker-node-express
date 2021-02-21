# docker

## tips

After installing docker, add the current user to the `docker` group.  You'll need to log out and back in afterwards.

`sudo usermod -a -G docker $USER`

## mongodb

### Single Container

Spin up a container, detached, expose ports outside:container, name it, and specify image

`docker run -d --name mongodb mongo`

In the above `mongodb` is the container name and `mongo` is the image name.
A host `mongo` client _can not_ access this instance of mongodb.

Connect to the docker instance and run mongo:

```bash
docker exec -it mongodb bash
mongo
```

OR `docker exec -it mongodb mongo`

### Access from host

In this command line, we are exposing ports from the container to the host with `-p outside:container`

`docker run -d -p 27017-27019:27017-27019 --name mongodb mongo`

Then run `mongo` on your command line using a local installation of the mongo server CLI.

## useful commands

```bash
docker images
docker image ls
docker image rm [<hash>|<image name>]
docker container ls --all
docker [container] rm [<hash>|<container name>]
docker start containerName
docker stop containerName
docker kill containerName
docker stats
docker ps
docker ps -a   to see all containers
docker logs <container-name> -f
```

`docker run` is equivalent to doing a `create` and a `start -a`

options `-d` detach, naming.

create a docker hub account.

Docker commands for the container & working with dockerhub: build, push, pull, run

## maintaining images

Update all images that don't have a `<none>` tag on them.
Remove all images that do have a `<none>` tag on them.

```bash
docker images --format "{{.Repository}}:{{.Tag}}" | grep --invert-match '<none>' | xargs -L1 docker pull

docker images --format "{{.Tag}}:{{.ID}}" | grep '<none>' | cut -d : -f2- |  xargs -L1 docker image rm
```

or, maybe, just use the `docker system prune` command to remove the unused stuff.

Look for children of an image given the parent hash:

```bash
docker inspect --format='{{.Id}} {{.Parent}}' \
    $(docker images --filter since=PARENT_HASH --quiet)
```

## app in a container

TBD: docker file

- ARG & ENV
- WORKDIR
- COPY
- RUN
- `--conectRetries`

## docker compose

TBD

## File persistence

Spin up a container that _persists_ to host drive outside of the container - no ports exposed

```bash
docker run --rm --name persist-mongo -v $HOME/Docker/Volumes/Mongodb:/data/db -d mongo
docker exec -it persist-mongo mongo
```

## images

node, r-base
python, python:2.7-slim, python:3.8-slim
mongo, mysql, postgres, redis, amazon/dynamodb-local

[GraphDB docker image build repo](https://github.com/Ontotext-AD/graphdb-docker)

## Reference articles

- [installing docker on Pop!_OS](https://medium.com/@Grigorkh/how-to-install-docker-on-ubuntu-19-04-7ccfeda5935)
- [nodeJS in docker](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/)
- [mongoDB in docker](https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/)
- [Docker CLI reference](https://docs.docker.com/engine/reference/run/)
