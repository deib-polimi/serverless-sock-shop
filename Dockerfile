FROM node:10-buster
ENV NODE_ENV "production"
ENV PORT 8080
EXPOSE 8080
RUN mkdir -p /usr/src/app

RUN apt update -y
RUN apt install curl -y
RUN apt install nano -y
RUN apt install dnsutils -y
RUN apt install net-tools -y

# Prepare app directory
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn install

COPY . /usr/src/app

# Start the app
CMD ["/usr/local/bin/npm", "start"]
