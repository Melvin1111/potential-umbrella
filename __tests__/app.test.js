const request = require('supertest');
const app = require('../app');
const testData = require('../db/data/test-data');
const seed = require('../db/seeds/seed');
const db = require('../db/connection');

beforeEach(() => {
	return seed(testData);
});

afterAll(() => {
	db.end();
});

describe('GET /api/categories', () => {
	test('responds with an array of categories', () => {
		return request(app)
			.get('/api/categories')
			.expect(200)
			.then((response) => {
				expect(response.body.categories.length).toBe(4);
				response.body.categories.forEach((category) => {
					expect(category).toHaveProperty('slug');
					expect(category).toHaveProperty('description');
				});
			});
	});
});
