# Use the official Node.js image with Node.js v18.15.0 as the base
FROM node:18.15.0

# Install yarn globally
RUN npm install -g yarn

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy all files from the current directory to the container
COPY . .

# Build the React application
RUN yarn build

# Expose the port that the server will run on
EXPOSE 3000

# Start the server
CMD ["yarn", "dev"]


#docker build -t your_image_name .
#docker run -p 3000:3000 your_image_name

