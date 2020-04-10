const Router = require('@koa/router');

const router = new Router();

router.get('/nostream', require('./users/nostream'));
router.get('/stream', require('./users/stream'));

module.exports = router;
