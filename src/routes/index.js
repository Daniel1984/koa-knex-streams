const Router = require('koa-router');

const router = new Router();

router.get('/nostream', require('./users/nonstream'));
router.get('/stream', require('./users/stream'));

module.exports = router;
