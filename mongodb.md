# mongodb

## Single Container

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

## Access from host

In this command line, we are exposing ports from the container to the host with `-p outside:container`

`docker run -d -p 27017-27019:27017-27019 --name mongodb mongo`

Then run `mongo` on your command line using a local installation of the mongo server CLI.

### mongodb import

`mongoimport --db=graphql --collection=trolls --file=trolls.json --jsonArray`
