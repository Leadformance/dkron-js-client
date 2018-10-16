FROM node:10.9.0-alpine as builder
LABEL maintainer="dev@leadformance.com"

# Create app directory
ENV SRC /app
RUN mkdir -p $SRC
WORKDIR $SRC

COPY package.json $SRC/
COPY yarn.lock $SRC/

RUN yarn --ignore-script

COPY . $SRC
