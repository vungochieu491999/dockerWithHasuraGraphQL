
FROM node:16.13.0-alpine3.14 AS builder

ENV folder=feature

WORKDIR /usr/src/app
COPY services/${folder}/package*.json ./
RUN npm ci

WORKDIR /usr/build/app
COPY services/${folder}/package*.json ./
RUN npm ci --production

WORKDIR /usr/src/app
COPY services/${folder} .
RUN npm run build

FROM node:16.13.0-alpine3.14 AS production

WORKDIR /usr/src/app
COPY --from=builder /usr/build/app ./
COPY --from=builder /usr/src/app/dist ./dist

CMD ["npm","start"]