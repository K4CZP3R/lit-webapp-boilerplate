FROM node:16-alpine AS build


WORKDIR /usr/src

COPY ./package.json .
COPY ./package-lock.json .
COPY ./rollup.config.js .
COPY ./src ./src
COPY ./tsconfig.json .
COPY ./index.html .


RUN npm ci --prefer-offline --no-audit
RUN npm run build
RUN npm run deploy

FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf

WORKDIR /app

COPY --from=build /usr/src/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

