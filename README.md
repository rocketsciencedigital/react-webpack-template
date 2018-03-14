# react-webpack-template

This is a simple template for building React apps. Use this to get started, and if you find yourself needing additional features, see my [webpack-howto](https://github.com/petehunt/webpack-howto).

## How to use this

* Clone the repo: `git clone https://github.com/petehunt/react-webpack-template my-new-project`
* Install the dependencies: `cd my-new-project && npm install`
* Start webpack: `npm start`
* Add your code to `index.js` and open `index.html`

## Dockerizing

    docker build -t react-webpack-template .

    docker run -p 127.0.0.1:80:8080 react-webpack-template webpack-dev-server

    Need to get HMR working yet -> socket connection issue