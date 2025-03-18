# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json package*.json ./

# Install dependencies
RUN npm install

# Copy all application files
COPY . .

# Expose port
EXPOSE 8080

# Start the application
CMD ["node", "server.js",'package.json','package-lock.json','vercel.json','tsconfig.json','start']
