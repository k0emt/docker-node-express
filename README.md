# docker-node-express

This project is for learning about creating an express application (node.js) and packaging it with Docker

## Build the image

In the image name, `k0emt` is my "organization".  I added `latest` as my tag after the `:`

```bash
docker build -t k0emt/docker-node-express:latest .
```

## Spinning up an image

```bash
docker run -p 3030:3000 -d --name my-container-name k0emt/docker-node-express
```

## Questions

- Why does npm fail unless I specify carbon?

## Notes

- Explore the built image `docker run -it --rm k0emt/docker-node-express sh`
- view logs from a run `docker logs container-name`

- mongodb import
`mongoimport --db=graphql --collection=trolls --file=trolls.json --jsonArray`

## Docker Compose Idea

Mutilple containers comprising a website solution

- Website (front end)
  - Gatsby
  - Hexo.io
  - React
- GraphQL API (mid-tier)
  - Apollo
  - express graphql
- Database with the Canadian bridge data
  - redis
  - mongodb
  - postgresql
  - dynamodb local?

## Other experimenting ideas

- express generator app
- parcel packaging?
- webpack packaging?

## My Resources

- [Docker notes](docker-notes.md)
- [redis docker notes](redis-docker.md)
- [postgresql notes](postgresql-docker.md)

## External Resources

- [Docker-node docs](https://github.com/nodejs/docker-node/blob/master/README.md#run-a-single-nodejs-script)
- [nodejs docs](https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/)
- [Medium article running a node app in docker](https://medium.com/@uix/running-a-node-application-in-docker-8950f176ec4e)
- [Hasura blog writing dockerfiles](https://hasura.io/blog/an-exhaustive-guide-to-writing-dockerfiles-for-node-js-web-apps-bbee6bd2f3c4/)
- [Alligator.io Express Basics](https://alligator.io/nodejs/express-basics/)
