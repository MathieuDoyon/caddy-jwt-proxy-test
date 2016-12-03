FROM node:6.5.0
EXPOSE 8000
ENV NPM_CONFIG_LOGLEVEL=warn

RUN mkdir /code
COPY package.json /code/
WORKDIR /code

RUN npm install --depth=0 --silent
COPY . /code

CMD npm start
