const fs = require('fs');
const Stringify = require('streaming-json-stringify')
const db = require('../../../services/db');

module.exports = async (ctx) => {
  ctx.type = 'text/event-stream; charset=utf-8';
  ctx.set('Cache-Control', 'no-cache');
  ctx.set('Connection', 'keep-alive');

  const stream = db
    .select('*')
    .from('users')
    .stream();

  await pipe(stream, ctx.res, { end: false });
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
