module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.status = err.status || 500;
    ctx.body = err.message || 'Oops. Something went wrong. Please try again later';
    // can emit on app for log
    // app.emit('error', err, ctx);
  }
}

