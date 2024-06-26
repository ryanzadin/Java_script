FROM cypress/base:latest

WORKDIR /home/MDC/

COPY . /home/MDC/

RUN npm install

CMD [ "npm","test" ]