require('dotenv').config();

const Koa = require('koa');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes');

const app = new Koa();

app
  .use(errorHandler)
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
