# Not Root example

Example of setting up a non-elevated user for the container.

## Prerequisites

This Dockerfile uses Docker Hardened Images (DHI), which require authentication:

```bash
docker login dhi.io
```

Use your Docker Hub credentials when prompted.

## Build

```bash
docker build -t k0emt/not-root .
```

The Dockerfile uses Docker Hardened Images Node.js 20 Alpine and includes security best practices:

- Running as non-root user (runner)
- Proper file permissions
- Using `npm ci` for deterministic builds
- Optimized layer caching

## Run

```bash
docker run -p 8080:8080 --rm k0emt/not-root
```

[View with browser](http://localhost:8080/)

## Verify permissions

Get an interactive session going so you can poke around and verify that you have things set up with the non-elevated account.  

Obtain the ID of the running container.  Then attach to it with an interactive shell.

```bash
docker ps
docker exec -it <containerID> sh
```

- Do a `whoami` to verify that you are `runner`.
- Use `ls -la` to verify file ownership and permissions.
- Browser around the file system.

### Shutdown and clean up

Stop running container with a `<ctrl><c>`
It will remove itself.
