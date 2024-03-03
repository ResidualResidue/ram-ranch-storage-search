# FROM node:lts-alpine as build 

# WORKDIR /app

# COPY package.json .
# RUN npm install 
# COPY . .
# RUN npm run build

# FROM nginx
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 

# COPY --from=build /app/build /usr/share/nginx/html 

#_______________________________________________________

# FROM node:lts-alpine as build

# COPY package.json /app/

# WORKDIR /app

# RUN npm install

# COPY . .

# CMD ["npm", "start"]

# Set base image
FROM node:latest AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install packages
COPY package.json .
RUN npm install

# Copy other project files and build
COPY . ./
RUN npm run build

# Set nginx image
FROM nginx:latest

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 
COPY --from=builder /app/build /usr/share/nginx/html 