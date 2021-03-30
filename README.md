# ToDo App in NestJs and React

## Description

[Nest](https://github.com/nestjs/nest) BoltTech Challenge. Small aplication with Auth and ToDo features, built using NestJS and React (Hooks)

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

## API Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
