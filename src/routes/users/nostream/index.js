const db = require('../../../services/db');

module.exports = async (ctx) => {
  try {
    const users = await db.select('*').from('users');
    ctx.status = 200;
    ctx.body = users;
  } catch (err) {
    ctx.throw(500, err);
  }
};
