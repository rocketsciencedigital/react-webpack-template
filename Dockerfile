FROM node:7.1

# RUN npm install -g webpack webpack-dev-server
# WORKDIR /tmp

WORKDIR /var/react-webpack-template

COPY package.json .
RUN npm config set registry http://registry.npmjs.org/ && npm install


COPY . .

RUN npm run build

# RUN cp -a /tmp/node_modules .
# ENV NODE_ENV=development
EXPOSE 3000

USER node

# CMD ['node_modules/.bin/webpack-dev-server']
CMD ['node', 'server.js']

