# ==== CONFIGURE =====
# Use a Node 16 base image
#FROM node:16-alpine 
# Set the working directory to /app inside the container
#WORKDIR /app
# Copy app files
#COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
#RUN yarn install 
# Build the app
#RUN yarn run build
# ==== RUN =======
# Set the env to "production"
#ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
#EXPOSE 3000
# Start the app
#CMD [ "yarn", "run", "start" ]

FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN yarn i
CMD ["uarn", "run", "start"]