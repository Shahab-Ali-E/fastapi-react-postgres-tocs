FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the project files
COPY . .

# Build the React app
RUN npm run build

# Use an nginx image to serve the static build files
FROM nginx:stable-alpine

# Copy the build files from previous stage to the nginx folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that NGINX is running on
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
