FROM node:lts-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn add glob rimraf

RUN yarn install --production=false

COPY . .

RUN yarn build

FROM node:lts-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production=true

COPY . .

COPY --from=development /usr/src/app/dist ./dist

ENV TZ 'America/La_Paz'

CMD ["node", "dist/main"]


#RUN npm cache clean --force && rm -rf node_modules && npm install
# FROM node:lts-alpine as develoment

# WORKDIR /backend

# COPY package*.json /backend

# RUN npm cache clean --force && rm -rf node_modules && npm install

# COPY . .

# EXPOSE 3000

# ENV TZ 'America/La_Paz'

# CMD ["npm", "run", "start:dev"]