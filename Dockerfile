FROM node:13

WORKDIR /ust/src/app

COPY package*json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]