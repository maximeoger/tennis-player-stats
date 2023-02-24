const router = require('koa-router')();

router.use('/api', require('./player').routes());

router.get('/api', async function(ctx) {
	ctx.body = "Hello World";
})

module.exports = router;