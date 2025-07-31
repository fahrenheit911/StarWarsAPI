# StarWarsAPI Project Structure

## Architecture

StarWarsAPI is based on a client-server architecture, where the frontend (StarWarsExplorer) interacts with the backend (StarWarsAPI) via a REST API. The backend uses Node.js and Express.js to handle HTTP requests, PostgreSQL for data storage, and TypeORM for database operations.

## Components

### Frontend (StarWarsExplorer)

A frontend application that makes HTTP requests to StarWarsAPI to retrieve data about people, planets, and starships.

### Backend (StarWarsAPI)

- **Express.js server**: Handles incoming HTTP requests from the client and routes them to the appropriate handlers.
- **Controllers**: Process request logic, interact with services, and return responses to the client.
- **Services**: Contain business logic and interact with the database.
- **DAO (Data Access Object)**: Responsible for data access and interaction with the database via TypeORM.
- **Entities**: Define the data structure and methods for interacting with PostgreSQL through TypeORM.
- **Routes**: Define API endpoints and link them to the corresponding controllers.

### Database (PostgreSQL)

Stores data about the Star Wars universe, such as people, planets, and starships.

### Data Migrations

Scripts for transferring data from the public SWAPI API to the local database. The migration process includes:

- Docker Compose healthchecks to ensure database readiness
- Automatic data cleaning and type conversion
- Comprehensive error handling and logging
- Support for nullable fields and large numeric values

## Component Interaction

### HTTP Requests from the Client

The client application makes HTTP requests to the REST API to retrieve data. For example, `GET /api/people` to get a list of people.

### Query Routing

Express.js handles requests and routes them to the appropriate endpoints. For example, a `GET /api/people` request is routed to the endpoint for retrieving the list of people.

### Controllers

Controllers receive requests from routes, process them, interact with services, and form responses. For example, the people controller calls the service to get the list of people from the database.

### Services

Services contain business logic and interact with the database via DAO. For example, the people service requests a list of people from PostgreSQL.

### DAO

DAO is responsible for interacting with the database via TypeORM. For example, the people DAO executes queries to the database to retrieve or modify data.

### Entities

Entities define the data structure and methods for interacting with PostgreSQL via TypeORM. For example, the people entity defines the data schema for people and methods for executing queries to the database.

### Responses to the Client

Controllers form responses and send them back to the client. For example, after receiving a list of people from the service, the controller sends this list as a JSON response to the client.

## Docker Architecture

### Services

- **star-wars-api**: Main application server running on port 3000
- **db**: PostgreSQL database with healthcheck monitoring
- **migration**: Data migration service that populates the database

### Key Features

- **Healthchecks**: PostgreSQL readiness is monitored before starting dependent services
- **Volume mounting**: Code changes are reflected immediately in development
- **Environment isolation**: Each service has its own environment configuration
- **Command override**: All startup commands are defined in docker-compose.yml for flexibility

## Error Handling and Logging

The application includes comprehensive error handling and informative logging:

- Database connection status with detailed error messages
- Migration progress tracking with success/failure reporting
- API endpoint availability and response status
- Docker service health monitoring
