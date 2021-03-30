# ToDo App in NestJs and React

## Description

[Nest](https://github.com/nestjs/nest) BoltTech Challenge. Small aplication with Auth and ToDo features, built using NestJS and React (Hooks).

## Installation

- Better to run using docker:
```bash
$ docker-compose up
```

- For isolated services:
  - `docker-compose up app` For NestJs API
  - `docker-compose up front` For React App

- For manage database:
  - `docker-compose up postgres` PostgreSQL
  - `docker-compose up pgadmin` PGAdmin

## Running Migrations

- After initialize, you must to run all db migrations to start to persist data. You can run:
  - `docker-compose exec app yarn run migration:run`

## API Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
