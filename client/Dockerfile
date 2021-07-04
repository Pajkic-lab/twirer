FROM node:alpine as react_build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=react_build /app/build /usr/share/nginx/html

EXPOSE 80