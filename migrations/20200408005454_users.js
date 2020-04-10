exports.up = async (knex) => {
  await knex
    .schema
    .createTable('users', (table) => {
       table.increments('id');
       table.string('email', 255).notNullable();
    });
};

exports.down = async (knex) => {
  await knex
    .schema
    .dropTable('users');
};

exports.config = { transaction: false };
