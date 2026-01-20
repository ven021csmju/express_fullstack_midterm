FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
HEALTHCHECK CMD wget -qO- http://localhost:3000/api/demo || exit 1
CMD ["node", "server.js"]
