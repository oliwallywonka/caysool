FROM node:14-alpine as node

# RUN mkdir -p /frontend

# WORKDIR /frontend

# COPY package*.json /frontend

# RUN npm install

# COPY . .

# #EXPOSE 4200

# #EXPOSE 49153

# #CMD ["npm", "start"]
# RUN npm run build --prod

# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html
# # Copying compiled code and nginx config to different folder
# # NOTE: This path may change according to your project's output folder
# COPY --from=build /frontend/dist/porko /usr/share/nginx/html
# COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container
# the app will be using Port 80 while running
#COPY --from=builder /app ./


# WORKDIR /app
# COPY ./ /app/
# RUN npm install
# RUN npm run build --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine

COPY dist/frontend /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

ENV TZ 'America/La_Paz'
