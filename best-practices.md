# Best Practices

## DockerFile

When creating a Dockerfile

- Chain RUN commands &&
- clear tool caches
- use multi-stage builds
- chown correctly -- use chown with COPY
- use BuildKit (Docker Image Builder)
- utilize the `.dockerignore` file
- use `docker scan` to check for vulnerabilities
