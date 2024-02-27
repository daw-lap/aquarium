FROM arm32v7/node:18-alpine3.17 as build

ENV DISABLE_JEMALLOC="true"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM arm32v7/nginx:alpine3.17

COPY --from=build /app/dist/aquarium /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]