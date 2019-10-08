# Stage 1 - the build process
FROM node:7.6-alpine as build-deps
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]