module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.status = err.status || 500;
    ctx.body = {
      msg: err.message || 'Oops. Something went wrong. Please try again later',
    };
  }
}

