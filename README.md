# docker-node-express

experiment for learning about creating an express application (node.js) and packaging it with Docker

## Build the image

```bash
docker build -t k0emt/docker-node-express .
docker build -t k0emt-docker-node-express .
```

## Spinning up an image

```bash
docker run -p 3030:3000 -d k0emt/docker-node-express --name my-container-name
docker run -p 3030:3000 -d k0emt-docker-node-express
```

## Questions

- What about interactive run?
- What about `--rm` ?
- Why does npm fail unless I specify carbon?

## Expansion

- express generator app
- parcel packaging?
- webpack packaging?
- maybe some gatsby?

## Resources

- [Docker-node docs](https://github.com/nodejs/docker-node/blob/master/README.md#run-a-single-nodejs-script)
- [nodejs docs](https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/)
- [Medium article](https://medium.com/@uix/running-a-node-application-in-docker-8950f176ec4e)
- [Hasura blog](https://hasura.io/blog/an-exhaustive-guide-to-writing-dockerfiles-for-node-js-web-apps-bbee6bd2f3c4/)
- [Express Basics](https://alligator.io/nodejs/express-basics/)
