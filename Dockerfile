FROM node

WORKDIR /app

COPY . .

RUN npm install

CMD ["nodemon", "index.js"]
