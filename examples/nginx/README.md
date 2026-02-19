# NGINX example

Static content hosting in NGINX

## Prerequisites

This Dockerfile uses Docker Hardened Images (DHI), which require authentication:

```bash
docker login dhi.io
```

Use your Docker Hub credentials when prompted.

## Build

```bash
docker build -t k0emt/nginx .
```

Uses Docker Hardened Images (DHI) NGINX as the base, providing:

- Zero known CVEs at build time
- Signed provenance and SBOM metadata
- Minimized attack surface with hardened base
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
