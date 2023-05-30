FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

RUN yarn install

COPY . .

# định nghĩa port private (trong)
RUN yarn run build
EXPOSE 8080

# npm start, node src/index.js 
CMD ["yarn","run","start:prod"]

# docker build . -t img-node