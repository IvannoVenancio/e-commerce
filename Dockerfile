
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "index.js"]

FROM node:20.18.0

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app
WORKDIR /home/app
USER node
COPY --chown=node:node . .

COPY package.json .
RUN npm install

COPY . .


CMD  npm start