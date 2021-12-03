FROM node:14-alpine AS builder
ENV NODE_ENV production

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --production

COPY . .

RUN yarn build