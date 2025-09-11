# NGINX example

Static content hosting in NGINX

## Build

```bash
docker build -t k0emt/nginx .
```

Uses the latest NGINX image as the base, providing:

- Latest security updates
- Best performance optimizations
- Modern web server capabilities

### Run

```bash
docker run -p 8080:80 --rm k0emt/nginx
```

[View with browser](http://localhost:8080/)

### Shutdown and clean up

Stop running container with a `<ctrl><c>`
It will remove itself.

## Resources

- [NGINX on DockerHub](https://hub.docker.com/_/nginx)
