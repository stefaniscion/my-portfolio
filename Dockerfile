FROM node:21-alpine3.18 AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
FROM nginx:1.25.3-alpine
COPY --from=build /app/build /usr/share/nginx/html