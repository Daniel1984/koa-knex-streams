module.exports = (ctx, next) => {
  //ctx.throw(500, 'oops', { msg: 'sprry' });
  ctx.status = 200;
  ctx.body = { message: 'stream' };
};
