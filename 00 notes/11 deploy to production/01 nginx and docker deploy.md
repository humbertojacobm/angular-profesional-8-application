- using docker to angular.
- a docker to backend, another to frontend.

- you can study docker in platzi.
- 
- static file server (nginx)
- we need to compile with AOT.

- but you need to install docker first.
- 
- after install docker

you can use

```bash
 docker pull nginx:alpine

 docker run -d -p 808:80 nginx:alpine

 docker ps
 
```

and we need to generate my dist folder

```bash
  ng build --prod
```

to updload the dist folder, we need to stop docker

```bash
 docker stop <<containerid>>
```

and to upload the dist folder


```bash
 docker run -d -p 808:80 -v /.... folder of dist/:/usr/share/nginx/html  nginx:alpine
```
Until know we are running application in a container. 

With this template you can upload this to azure or amazon.

you can create a dockerfile to run many commands at once.

to use this you need to stop the docker contanainer and ru this


```bash
 docker build . -t platzi-store:latest

 docker run -d -p 80:80 platzi-store:latest
```
