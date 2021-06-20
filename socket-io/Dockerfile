FROM node:12.18-alpine
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY /build /src
EXPOSE 8091
CMD ["npm", "run", "prod"]
