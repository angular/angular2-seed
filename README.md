## angular2-seed

A simple starter project demonstrating the basic concepts of Angular 2.


### Usage with node installed locally
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script

### Usage with Docker (node not required to be installed locally)
- Clone or fork this repository
- Make sure you have [docker](https://docs.docker.com/engine/installation/) installed
- Find enter the directory containing `Dockerfile`
- Run `docker build -t angular2seed .`
- Run `docker run -d -p 3000:3000 angular2seed`
- Open browser to [`http://localhost:3000`](http://localhost:3000)
