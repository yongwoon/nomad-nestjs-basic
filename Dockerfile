FROM node:14.15.1-alpine as builder

ENV APP_ROOT /api
ENV NODE_ENV=production

WORKDIR $APP_ROOT
COPY . $APP_ROOT
COPY package.json $APP_ROOT
COPY package-lock.json $APP_ROOT
RUN npm install

#####################################

FROM node:14.15.1-alpine
ENV HOST=0.0.0.0
ENV APP_ROOT /api
RUN apk add --update vim
WORKDIR $APP_ROOT
COPY --from=builder $APP_ROOT $APP_ROOT
CMD ["npm", "run", "start:prod"]
