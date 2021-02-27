# Not Root example

Example of setting up a non-elevated user for the container.

## Build

```bash
docker build -t k0emt/not-root .
```

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
