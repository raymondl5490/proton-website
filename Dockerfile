FROM node:14 as node14-base

USER node
RUN mkdir -p  /home/node/.npm \
              /home/node/app
ENV NPM_CONFIG_PREFIX=/home/node/.npm
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH
RUN npm -g config set user "$USER" && \
    printf "Node version %s, npm version %s, yarn version %s\n\n" "$(node -v)" "$(npm -v)" "$(yarn -v)"

FROM node14-base as dependencies
WORKDIR /home/node/app/
COPY . .
RUN yarn

ENTRYPOINT ["yarn", "run"]

FROM dependencies as development
EXPOSE 3000
CMD ["dev"]

FROM dependencies as build
CMD ["build"]