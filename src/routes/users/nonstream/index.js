const db = require('../../../services/db');

module.exports = async (ctx, next) => {
  //ctx.throw(500, 'oops', { msg: 'sprry' });
  const users = await db('users').select('*');

  ctx.status = 200;
  ctx.body = users;
};
