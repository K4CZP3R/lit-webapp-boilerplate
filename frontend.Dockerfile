FROM node:16-alpine AS builder

WORKDIR /usr/src

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci --prefer-offline --no-audit

COPY . .

RUN npm run build

FROM nginx:stable-alpine

WORKDIR /opt

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=builder /usr/src/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]