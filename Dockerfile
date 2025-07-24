# Etapa 1: build do Angular
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build -- --configuration production

# Etapa 2: NGINX
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/colisio/browser /usr/share/nginx/html
