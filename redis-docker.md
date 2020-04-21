# Redis

## With Docker

Spin up docker, connect to it interactively:

```bash
docker run -d -p 6379:6379 --name redis1 redis
docker exec -it redis1 sh
redis-cli
```

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

## Resources

[Redis on dockerhub](https://hub.docker.com/_/redis/)

[bitnami Redis](https://hub.docker.com/r/bitnami/redis/)

[SoundCode](https://markheath.net/post/exploring-redis-with-docker)

[Redis crash course YT](https://www.youtube.com/watch?v=Hbt56gFj998)

