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

FROM node:16-alpine 

WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn install

COPY . .
RUN yarn run build

FROM nginx:1.18-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /build/build /frontend/build
RUN npm run build

FROM nginx:1.15.8-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf
