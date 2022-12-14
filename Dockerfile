# ==== CONFIGURE =====
# Use a Node 16 base image
#FROM node:16-alpine 
# Set the working directory to /app inside the container
#WORKDIR /app
# Copy app files
#COPY . .
# ==== BUILD =====
# Upates to the lates npm version
#RUN npm install -g npm@latest
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
#RUN npm ci 
# Build the app
# ==== RUN =======
# Set the env to "production"
#ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
#EXPOSE 3000
# Start the app
#CMD [ "npx", "serve", "build" ]

FROM tiangolo/node-frontend:10 as build-stage
RUN npm install -g npm@latest
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY ./ /app/
RUN yarn run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf