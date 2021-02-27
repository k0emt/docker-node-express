# Simple example

Very basic node app install in a working directory.

## Build

```bash
docker build -t k0emt/simple .
```

### Run

```bash
docker run -p 3000:3000 --rm k0emt/simple
```

[View with browser](http://localhost:3000/)

### Shutdown and clean up

Stop running container with a `<ctrl><c>`
It will remove itself.
