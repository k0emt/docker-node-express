# Simple example

Very basic node app install in a working directory.

## Prerequisites

This Dockerfile uses Docker Hardened Images (DHI), which require authentication:

```bash
docker login dhi.io
```

Use your Docker Hub credentials when prompted.

## Build

```bash
docker build -t k0emt/simple .
```

The Dockerfile uses Docker Hardened Images (DHI) Node.js 20 Alpine as the base image and includes best practices such as:

- Using `npm ci` for deterministic builds
- Proper file copying order for better layer caching
- .dockerignore to exclude unnecessary files

### Run

```bash
docker run -p 3000:3000 --rm k0emt/simple
```

[View with browser](http://localhost:3000/)

### Shutdown and clean up

Stop running container with a `<ctrl><c>`
It will remove itself.
