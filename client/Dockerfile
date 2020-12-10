FROM node

COPY package*.json ./

RUN npm install -g sass
RUN npm install 

COPY . .
EXPOSE 8080

CMD ["npm","run","start"]
