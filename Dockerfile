FROM node:10.16.0-alpine AS builder

WORKDIR /app

# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

# Run the SSR build
RUN npm run build:ssr

EXPOSE 4000

CMD npm run serve:ssr
