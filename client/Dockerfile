# # ==== CONFIGURE =====
# # Use a Node 16 base image
# #FROM node:16-alpine 
# # Set the working directory to /app inside the container
# #WORKDIR /app
# # Copy app files
# #COPY . .
# # ==== BUILD =====
# # Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# #RUN yarn install 
# # Build the app
# #RUN yarn run build
# # ==== RUN =======
# # Set the env to "production"
# #ENV NODE_ENV production
# # Expose the port on which the app will be running (3000 is the default that `serve` uses)
# #EXPOSE 3000
# # Start the app
# #CMD [ "yarn", "run", "start" ]
# FROM --platform=linux/amd64 node:alpine
# WORKDIR /client
# COPY package.json ./
# # COPY package-lock.json ./
# COPY yarn.lock ./
# COPY ./ ./

# # Clear cahce
# RUN yarn cache clean

# # Install packages
# RUN yarn --network-timeout 1000000

# # Install `serve` to run the application.
# RUN npm install -g serve

# # Uses port which is used by the actual application
# EXPOSE 8080


# # CMD ["yarn", "run", "start"]

# # Run application
# # CMD [ "npm", "start" ]
# # CMD npm run prod
# CMD serve -s build -l 8080

# Base image
FROM node:14-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# RUN yarn run test

# Copy application files
COPY . .

# Build the React app
RUN yarn run build

# Production-ready image
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (default for Nginx)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]