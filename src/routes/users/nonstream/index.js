const db = require('../../../services/db');

module.exports = async (ctx, next) => {
  try {
    const users = await db('users').select('*');
    ctx.status = 200;
    ctx.body = users;
  } catch (err) {
    ctx.throw(500, err);
  }
};
