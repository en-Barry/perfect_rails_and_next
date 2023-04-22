FROM ruby:3.1.1-alpine

ENV APP_ROOT /api
ENV TZ=Asia/Tokyo

WORKDIR $APP_ROOT

# Add packages
RUN apk update && apk add --no-cache \
      git \
      nodejs \
      vim \
      curl \
      bash \
      npm \
      build-base \
      libxml2-dev \
      libxslt-dev \
      libgcrypt-dev \
      libffi-dev

# Using Node.js v16.x(LTS)
RUN apk add --no-cache --repository=https://dl-cdn.alpinelinux.org/alpine/edge/main nodejs

# Add yarnpkg for assets:precompile
RUN npm install -g yarn

# Update Bundler to the latest version
RUN gem update --system
RUN gem install bundler

ADD . $APP_ROOT
RUN bundle install
