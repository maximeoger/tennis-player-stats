const router = require('koa-router')();
const axios = require('axios');
const { HTTP_STATUS_CODES, EXTERNAL_API_URL } = require('../../utils/constants');

router.get('/players', async function (ctx) {
	const response = await axios.get(EXTERNAL_API_URL);
	const data = response.data;
	ctx.status = HTTP_STATUS_CODES.OK_200;
	ctx.body = data;
});

router.get('/players/:id', async function (ctx) {
	const response = await axios.get(EXTERNAL_API_URL);
	const data = response.data.players.filter(player => player.id === Number(ctx.params.id));

	if(!data.length) {
		ctx.throw(HTTP_STATUS_CODES.NOT_FOUND_404, 'player not found :(');
	}

	ctx.status = HTTP_STATUS_CODES.OK_200;
	ctx.body = data;
});

module.exports = router;