FROM node:14-alpine

WORKDIR /frontend

COPY package*.json /frontend

RUN npm install

COPY . /frontend

EXPOSE 4200

EXPOSE 49153

CMD ["npm", "start"]
#RUN npm run build --prod

#FROM nginx:alpine
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
#COPY --from=builder /app/dist/frontend /usr/share/nginx/html
#COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container
# the app will be using Port 80 while running
#COPY --from=builder /app ./
