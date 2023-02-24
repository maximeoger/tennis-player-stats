const { HTTP_STATUS_CODES } = require('./constants');

const http_errors = {
	'500': HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR_500,
	'404': HTTP_STATUS_CODES.NOT_FOUND_404
}

module.exports = async function (ctx, next) {
	try {
		await next();

		const status = ctx.status || http_errors["404"];

		if(status === http_errors["404"]) ctx.throw(http_errors["404"]);
		if(status === http_errors["500"]) ctx.throw(http_errors['500']);

	} catch (err) {
		ctx.status = err.statusCode || err.status || err.response.status || http_errors['500'];
		ctx.body = {
			error: true,
			statusCode: err.status || err.response.status,
			message: err.message
		};

		// Prevent errors from logging in test environement
		if (process.env.NODE_ENV !== 'test') {
			ctx.app.emit('error', err, ctx);
		}
	}
};