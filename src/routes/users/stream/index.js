const Stringify = require('streaming-json-stringify')
const db = require('../../../services/db');

module.exports = async (ctx) => {
  ctx.type = 'application/json; charset=utf-8';
  ctx.set('Connection', 'keep-alive');

  try {
    const stream = db
      .select('*')
      .from('users')
      .stream();

    ctx.status = 200;
    await pipe(stream, ctx.res, { end: false });
  } catch (err) {
    ctx.throw(500, err);
  }
};

function pipe(from, to, options) {
  return new Promise((resolve, reject) => {
    from
      .pipe(Stringify())
      .pipe(to, options);

    from.on('error', reject);
    from.on('end', resolve);
  })
}
