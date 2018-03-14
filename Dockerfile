FROM node:7.1

# RUN npm install -g webpack webpack-dev-server
# WORKDIR /tmp

WORKDIR /var/react-webpack-template

COPY package.json .
RUN npm config set registry http://registry.npmjs.org/ && npm install


COPY . .

# RUN cp -a /tmp/node_modules .


ENV NODE_ENV=development

CMD ['node_modules/.bin/webpack-dev-server']

EXPOSE 8080