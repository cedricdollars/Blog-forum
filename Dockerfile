FROM node:latest

WORKDIR /src/

COPY . .

RUN yarn install

EXPOSE 3000

CMD yarn start