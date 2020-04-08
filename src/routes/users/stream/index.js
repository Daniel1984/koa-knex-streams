const fs = require('fs');
const db = require('../../../services/db');

module.exports = (ctx, next) => {
  const stream = db.select('*').from('users').limit(10).stream();
  ctx.body = ctx.req.pipe(stream)
};
