# Build Stage 1
FROM node:22-alpine AS build
WORKDIR /app

# Accept build arguments for GitHub OAuth credentials
ARG STUDIO_GITHUB_CLIENT_ID
ARG STUDIO_GITHUB_CLIENT_SECRET

# Convert build args to environment variables for Nuxt build
ENV STUDIO_GITHUB_CLIENT_ID=${STUDIO_GITHUB_CLIENT_ID}
ENV STUDIO_GITHUB_CLIENT_SECRET=${STUDIO_GITHUB_CLIENT_SECRET}

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . ./

# Build the project
RUN npm run build

# Build Stage 2
FROM node:22-alpine
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY --from=build /app/.output/ ./

# Change the port and host
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]
