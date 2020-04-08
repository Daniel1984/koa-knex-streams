const db = require('../../../services/db');

module.exports = async (ctx, next) => {
  //ctx.throw(500, 'oops', { msg: 'sprry' });
  const start = Date.now()
  const users = await db('users').select('*');
  const end = Date.now()

  ctx.status = 200;
  ctx.body = { message: 'nostream', users, time: end - start };
};
