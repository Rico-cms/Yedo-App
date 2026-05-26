FROM node:20-alpine
WORKDIR /app
COPY package.json tsconfig.json ./
COPY src ./src
RUN npm install && npm run build
EXPOSE 8787
CMD ["npm", "run", "start"]
