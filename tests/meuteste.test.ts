import app from '../src/server';
const request = require('supertest');


function sum(a, b) {
    return a + b;
  }

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('GET /user', function() {
    it('responds with json', async () => {
      await request(app)
        .get('/user')
        .expect(200);
    });
  });