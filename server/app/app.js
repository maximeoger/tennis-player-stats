const Koa = require('koa');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const errorMiddleware = require('./utils/errorMiddleware');
const api = require('./api');

const app = new Koa();

app.use(logger());
app.use(cors({ origin: process.env.client_origin }));
app.use(errorMiddleware);
app.use(api.routes());

const server = app.listen(3002);

module.exports = server;