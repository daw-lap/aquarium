FROM arm32v7/node:18-alpine3.17 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM arm32v7/nginx:alpine3.17

COPY --from=build /app/dist/aquarium /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]