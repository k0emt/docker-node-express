# Postgresql and Docker

## Some helpful postgresql container docker commands

Get latest image of PostgresQL

`docker pull postgres`

This command removes the container after the run, it maps data to a "volumes" directory
`docker run --rm --name my_pg -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/Docker/Volumes/Postgres:/var/lib/postgresql/data postgres`

I'm doing this, spin up a new container named `my_pg` from image `postgres` Mapping and exposing port 5432 from the container to the host OS:
`docker run --name my_pg -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres`

- Get an interactive session going

    ```bash
    docker exec -it my_pg bash
    psql -U postgres`
    ```

- `docker stop my_pg`
- `docker start my_pg`
- `docker container ls --all`

## AWS

dockerrun.aws.json for when deploying to ELB

## Resources

- [JSON to postgresql](https://stackoverflow.com/questions/33129526/loading-json-data-from-a-file-into-postgres)
- [pgAdmin 4 Install info](https://wiki.postgresql.org/wiki/Apt)
- [postgreSQL in docker](https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198)