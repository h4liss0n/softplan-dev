FROM node:12.18-alpine
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY /build /src
COPY ormconfig.json .
EXPOSE 5000
CMD ["node", "src/index.js"]
