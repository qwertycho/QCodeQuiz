FROM node:25-alpine AS builder

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:25-alpine as final
RUN npm i -g serve

COPY --from=builder /src/dist /app
WORKDIR /app

EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]