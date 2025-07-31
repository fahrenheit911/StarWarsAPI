# StarWarsAPI

StarWarsAPI is the backend for the StarWarsExplorer application. It provides a REST API to access data about the Star Wars universe.

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation and Running](#installation-and-running)
- [Migration and Database Seeding](#migration-and-database-seeding)
- [Request Examples](#request-examples)
- [API Structure](#api-structure)
- [Stopping Containers](#stopping-containers)

## Description

StarWarsAPI provides information about characters, planets, starships, and other aspects of the Star Wars universe. This backend is intended for use with the StarWarsExplorer frontend application.

## Technologies

- Node.js
- Express.js
- Docker
- PostgreSQL
- TypeORM

## Installation and Running

### Requirements

- Node.js (14+)
- Docker
- Docker Compose

### Local Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fahrenheit911/StarWarsAPI.git
   cd StarWarsAPI
   ```

2. Create environment file
   Copy the example environment file and adjust if needed:

   ```bash
   cp .env.example .env
   ```

3. Build and start the containers:

   ```bash
   docker-compose up --build -d
   ```

4. Visit the API in your browser or Postman:

   ```bash
   http://localhost:3000/api/people
   ```

## Migration and Database Seeding

- Data from the external SWAPI is loaded automatically using a separate `migration` container.
- The migration process uses Docker Compose healthchecks to ensure PostgreSQL is ready before starting.
- The migration script automatically processes numeric fields: if the data contains `"unknown"` or an empty string, `null` is saved to the database.
- For large numeric values (e.g., `cargo_capacity`, `cost_in_credits`), fields of type `bigint` are used.
- If the migration fails, check the logs of the `migration` container:
  ```bash
  docker-compose logs migration
  ```

## Request Examples

Get a list of entities:

```bash
curl -X GET http://localhost:3000/api/people
curl -X GET http://localhost:3000/api/planets
curl -X GET http://localhost:3000/api/starships
```

Create a new entity:

```bash
curl -X POST http://localhost:3000/api/people \
-H "Content-Type: application/json" \
-d '{"name": "Luke Skywalker", "height": "172", "mass": "77"}'
```

## API Structure

All endpoints are prefixed with `/api`.

### Available Endpoints

For each entity type, the following endpoints are available:

- `GET /api/{entity}` — Get a list of all entities
- `GET /api/{entity}/:id` — Get an entity by ID
- `POST /api/{entity}` — Create a new entity

**Available entity types:**

- `people` - Characters from Star Wars universe
- `planets` - Planets and locations
- `starships` - Spacecraft and vehicles

**All endpoints return JSON.**

## Stopping Containers

```bash
docker-compose down
```

---

**If you encounter errors during migration or startup, check the container logs and verify your environment variables.**
