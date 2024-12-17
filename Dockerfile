FROM node:20.18.0

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app
WORKDIR /home/app
USER node
COPY --chown=node:node . .

COPY package.json .
RUN npm install

COPY . .


<<<<<<< HEAD
CMD  npm start
=======
CMD  npm start

>>>>>>> 438bb46b9f03610f34a790db808df1cc59e66103
