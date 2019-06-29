FROM node:latest AS builder
ENV APP=/var/www

#RUN apt-get update # && app-get install -y curl

# Create app directory
RUN mkdir -p $APP
WORKDIR $APP

# Install app dependencies
COPY package*.json $APP/

RUN npm install
#RUN npm rebuild node-sass

# Bundle app source in this experiment the dist should be build
# already  as well as all node modules
COPY . $APP
RUN npm run build

FROM nginx:latest
RUN apt-get update && apt-get install -y nginx

ENV APP1=/var/www
WORKDIR /usr/share/nginx/html


# now there is a folder in dist for angular 6
COPY --from=builder ${APP1}/dist/nasdaq-clique-analysis .
COPY proxy.conf /tmp/proxy.conf

EXPOSE 8080 8443
CMD ["sh","-c","envsubst < /tmp/proxy.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
