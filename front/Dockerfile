FROM node:16-alpine
ENV TZ=Asia/Tokyo

ENV APP_ROOT /front
WORKDIR $APP_ROOT

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
