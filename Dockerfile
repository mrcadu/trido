FROM node:10

WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install
COPY . /opt/app
RUN sed 1d .env > .env
RUN echo "REACT_APP_FETCH_URL=http://104.154.137.201:8080/api/v1" >> .env
EXPOSE 3000
RUN touch trido.log
CMD exec npm run start > trido.log
