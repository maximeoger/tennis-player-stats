const supertest = require('supertest');
const axios = require('axios');
const moxios = require('moxios');
const server = require('../../app/app');
const { EXTERNAL_API_URL, HTTP_STATUS_CODES } = require('../utils/constants');
const { getPlayersStub } = require('../utils/tests/stubs');

const stubRequest = (stubbedStatusCode, stubbedResponse) => {
	moxios.stubRequest(EXTERNAL_API_URL,{
		status: stubbedStatusCode,
		response: stubbedResponse
	});
}

describe('Player routes', () => {

	beforeAll(() => {
		moxios.install(axios);
		console.info('starting server.');
	})

	afterAll(() => {
		moxios.uninstall(axios);
		server.close();
		console.info('server closed.');
	});

	test('GET /players should return a list of players', async () => {
		stubRequest(HTTP_STATUS_CODES.OK_200, getPlayersStub);
		const response = await supertest(server).get('/api/players');
		expect(response.status).toBe(HTTP_STATUS_CODES.OK_200);
		expect(response._body).toMatchObject(getPlayersStub);
	});

	test('GET /players/:id should return the correct player depending on id parameter', async () => {
		stubRequest(HTTP_STATUS_CODES.OK_200, getPlayersStub);
		const response = await supertest(server).get('/api/players/52');
		expect(response.status).toBe(HTTP_STATUS_CODES.OK_200);
		expect(response._body).toMatchObject(getPlayersStub.players.filter(player => player.id === 52));
	});

	test('GET /players should return a 404 if url does not exists', async () => {
		stubRequest(HTTP_STATUS_CODES.NOT_FOUND_404, { error: true, message: 'not found' });
		try {
			await supertest(server).get('/api/players/99');
		} catch (err) {
			expect(err.status).toBe(HTTP_STATUS_CODES.NOT_FOUND_404);
		}
	});
});

