### Instructions

1. `npm i`
2. `docker-compose up --build`
3. generate migration `./node_modules/.bin/knex migrate:make {migrationName}`
4. migrate db up `npm run migrate:up`
5. migrate db down `npm run migrate:down`
