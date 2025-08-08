FROM node:24.5.0-alpine3.22 AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
FROM nginx:1.29.0-alpine
COPY --from=build /app/build /usr/share/nginx/html