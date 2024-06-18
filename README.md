# StarWarsAPI

StarWarsAPI is the backend for the StarWarsExplorer application. It provides a REST API to access
data about the Star Wars universe.

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation and Running](#installation-and-running)

## Description

StarWarsAPI provides information about characters, planets, starships, and other aspects of the Star
Wars universe. This backend is intended for use with the StarWarsExplorer frontend application.

## Technologies

This project is built using the following technologies:

- Node.js
- Express.js
- Docker
- PostgreSQL
- TypeORM

## Installation and Running

### Requirements

- Node.js (version 14 or higher)
- Docker
- Docker-compose

### Local Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fahrenheit911/StarWarsAPI.git
   cd StarWarsAPI
   ```

2. Installing dependencies:

   ```bash
   npm install
   ```

3. Create an .env file in the root directory of the project with the following contents:

   ```bash
   PORT=3000
   DATABASE_URL=postgres://postgres:root@db:5432/sw_api
   ```

4. Build and run the Docker containers:

   ```bash
   docker-compose up -d
   ```

### Verification of operation

Once the containers are running, the API will be available at http://localhost:3000

### Examples of requests

Getting a people-list

```bash
curl -X GET http://localhost:3000/api/people
```

Creating a new person

```bash
curl -X POST http://localhost:3000/api/people \
-H "Content-Type: application/json" \
-d '{"name": "Luke Skywalker", "height": "172", "mass": "77"}'
```

### Stopping the containers

Чтобы остановить контейнеры, выполните:

```bash
docker-compose down
```
