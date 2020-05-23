from node:12 as node

workdir /app
copy ./ /app
run npm install
run npm run build -- --prod

from nginx:alpine
copy --from=node /app/dist/platzi-store-pro /usr/share/nginx/html
