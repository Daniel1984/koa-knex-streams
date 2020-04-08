exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('users').del()

  const users = [];

  for (let i = 0; i < 60000; i++) {
    users.push({
      email: `user${i}@mail.com`,
    });
  }

  return knex('users').insert(users);
};
