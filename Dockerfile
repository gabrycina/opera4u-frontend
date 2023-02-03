FROM node:14.1-alpine as build

WORKDIR /app

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn config delete proxy
RUN npm config rm proxy

RUN npm config rm https-proxy

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY BE269E0DA5000DC62311E42E949B6783.txt /usr/verification

RUN rm /etc/nginx/conf.d/default.conf

COPY proxy/nginx.conf /etc/nginx/conf.d

COPY SSL.crt  /etc/ssl/certs/
COPY SSL.key  /etc/ssl/private/
COPY certificate.crt  /etc/ssl/certs/
COPY private.key  /etc/ssl/private/


EXPOSE 443
# start nginx 
CMD ["nginx", "-g", "daemon off;"]