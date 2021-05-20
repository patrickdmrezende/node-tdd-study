# node-tdd-study
Repository for TDD studies with node

## Configure App
**Database**
The Database used is postgres
A postgres docker image is used:
  - Install Docker
  - run: `docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=postgresadmin -d postgres`
  - The PostgresQL is ready to connect and use.
Install PG-admin using Docker:
  - run: `docker run --rm -p 5050:5050 thajeztah/pgadmin4`
  - Now manage your postgres from the browser by launching http://localhost:5050

> Instructions to use postgres docker image taken from: https://dev.to/shree_j/how-to-install-and-run-psql-using-docker-41j2
## Run App
`npm i`
`npm run secure-mode` - run app with tests
