# Best Practices

## DockerFile

When creating a Dockerfile

- Use Docker Hardened Images (DHI) for base images when available
  - Near-zero known CVEs at build time
  - Signed provenance and SBOM metadata
  - Minimized attack surface
  - Authenticate with `docker login dhi.io` using Docker Hub credentials
- Chain RUN commands &&
- clear tool caches
- use multi-stage builds
- chown correctly -- use chown with COPY
- use BuildKit (Docker Image Builder)
- utilize the `.dockerignore` file
- use `docker scan` to check for vulnerabilities
