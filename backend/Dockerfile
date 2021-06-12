FROM node:12.18-alpine
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
RUN npm i -g typeorm --production --silent
RUN npm install -g ts-node --production --silent
COPY /build /src
COPY ormconfig.json .
EXPOSE 5000
# CMD ["node", "src/index.js", "typeorm" , "migration:run"]
CMD ["npm", "run", "migrateAndRun:prod"]
# CMD ["npm", "run", "start:prod"]
