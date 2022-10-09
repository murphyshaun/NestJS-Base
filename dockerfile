FROM node:16.14.2-alpine AS base

WORKDIR /app

COPY ["package.json", "./"]

FROM base AS dev
RUN npm install
COPY . .
CMD [ "npm", "run", "start:dev" ]

FROM base as prod
RUN npm install

COPY . .

RUN npm i -g @nestjs/cli
RUN npm run build

CMD [ "npm", "run", "start:prod" ]