FROM node:14.15.5-alpine3.10

# provide a non-elevated environment
# addgroup / useradd arguments will vary based on your distro
# you may need groupadd and useradd
RUN addgroup -S runner && adduser -S -G runner runner
WORKDIR /usr/app
RUN chown runner:runner /usr/app && chmod 774 /usr/app

# service port
EXPOSE 8080

# set up entry
CMD [ "npm", "start" ]

# example shell script entry
# COPY --chown=runner:runner entry.sh .
# RUN chmod +x entry.sh
# CMD ./entry.sh

# switch to non-elevated user
USER runner

# bring in additional configuration files here
# COPY --chown=runner:runner env ./env

# install dependencies
COPY --chown=runner:runner package*.json ./

RUN npm install

# bring in application file
COPY --chown=runner:runner index.js .

# app build here-- typically npm run build