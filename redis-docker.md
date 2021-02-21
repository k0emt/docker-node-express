# Redis

Notes regarding experiminting with redis running in a docker container.

## Docker single container

This approach spins up a container with redis.  The `-d` means in a detached or no output, no interaction mode.
The port exposure is not really necessary for this to work.
Then we connect to the running server and run the redis-cli on it.

```bash
docker run -d -p 6379:6379 --name redis1 redis
docker exec -it redis1 redis-cli
```

With redis, you `set` and `get` key values.

When you are done playing, `docker stop redis1` and clean up with `docker rm redis1`

## Docker multiple containers

This approach sets up a network.  Then the docker server is spun and run.  This time our client is run in another container which connects to the server.  The client container is automatically removed `--rm` when you exit the `redis-cli`.

bitnami approach:

```bash
docker network create app-tier --driver bridge
docker run -d --name redis-server \
    -e ALLOW_EMPTY_PASSWORD=yes \
    --network app-tier \
    redis
docker run -it --rm \
    --network app-tier \
    redis redis-cli -h redis-server
```

Clean up:

```bash
docker stop redis-server
docker rm redis-server
docker network rm app-tier
```

## Resources

- [Redis on dockerhub](https://hub.docker.com/_/redis/)
- [bitnami Redis](https://hub.docker.com/r/bitnami/redis/)
- [SoundCode](https://markheath.net/post/exploring-redis-with-docker)
- [Redis crash course YT](https://www.youtube.com/watch?v=Hbt56gFj998)
