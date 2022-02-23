FROM node:14-alpine as develoment

WORKDIR /backend

COPY package*.json /backend

RUN npm cache clean --force && rm -rf node_modules && npm install

COPY . /backend

EXPOSE 3000

CMD ["npm", "run", "start:prod"]