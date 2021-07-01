---
title: Installation
---

# Installation

You have to options to install Aurora, one with Docker, and one manually. In this page you will find twice the options.

## Docker Installation

### Requirements

The Aurora deployment with Docker has the following requirements to function properly:

- Docker >= 19
- Docker Compose >= 1.26

### Up and Running!

If you want to start in seconds you can use a `docker-compose.yml` like this example:

```yaml
version: "3.7"
services:
  ui:
    image: ghcr.io/useaurora/aurora/aurora
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_API_URL: http://localhost:5000
    depends_on:
      - postgres

  api:
    image: ghcr.io/useaurora/api/api
    ports:
      - "5000:5000"
    environment:
      DB_CONNECTION: pg
      DB_HOST: postgres
      DB_PORT: 5432
      DB_DATABASE: aurora
      DB_USERNAME: aurora
      DB_PASSWORD: aurora
      DB_SSL: "false"

      JWT_SECRET: djd83ng94hf03hf93j
    depends_on:
      - postgres

  postgres:
    image: postgres:12-alpine
    environment:
      POSTGRES_DB: aurora
      POSTGRES_USER: aurora
      POSTGRES_PASSWORD: aurora
    volumes:
      - aurora_postgres:/var/lib/postgresql/data

volumes:
  aurora_postgres:
```

And deploy all the stuff with the following command:

```bash
docker-compose up -d
```

This file will pull all the needing images in order to run an Aurora instance.

Congratulations! Now follow the Initialization section to add your first user to Aurora!

## Manual Installation

### Requirements

The Aurora manual deployment has the following requirements to function properly:

- Node.js >= 12
- PostgreSQL => 12

### Install the Aurora API Module

Run the following command to clone the repository:

```bash
git clone https://github.com/useaurora/api.git
```

So install the dependencies:

```bash
cd api && npm install
```

Once you have installed the dependencies, copy the .env.example file to a .env:

```bash
cp .env.example .env
```

The .env file will be pre-filled with some empty keys, once you filled, run the start command in order to run the server.

```bash
npm start
```

That's all for the API module!

### Install the Aurora UI Module

Run the following command to clone the repository:

```bash
git clone https://github.com/useaurora/aurora.git
```

So install the dependencies:

```bash
cd aurora && npm install
```

Once you have installed the dependencies, copy the .env.example file to a .env.

```bash
cp .env.example .env
```

The .env file will be pre-filled with some empty keys, once you filled, run the build & start command in order to run the server.

```bash
npm run build && npm run start
```

Congratulations! Now follow the Initialization section to add your first user to Aurora!
