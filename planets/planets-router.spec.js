const request = require('supertest');
const server = require('../api/server.js');

describe('planets-router.js', () => {
  describe('GET /api/planets', () => {
    it('should respond with 200 OK', async () => {
      const res = await request(server).get('/api/planets');

      expect(res.status).toBe(200);
    });
  });

  describe('POST /api/planets', () => {
    it('should respond with 201 created', () => {
      return request(server)
        .post('/api/planets')
        .send({ name: 'Earth4', distance_from_sun: 93 })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe('POST /api/planets', () => {
    it('should respond with json', () => {
      return request(server)
        .post('/api/planets')
        .send({ name: 'Earth2', distance_from_sun: 93 })
        .then(res => {
          expect(res.type).toBe('application/json');
        });
    });
  });

  describe('DELETE', () => {
    it('should respond with 204 no content', () => {
      return request(server)
        .delete('/api/planets/2')
        .then(res => {
          expect(res.status).toBe(204);
        });
    });
  });

  describe('DELETE', () => {
    it('should respond with count 1', () => {
      return request(server)
        .delete('/api/planets/2')
        .then(res => {
          expect(res.data).toBe(undefined);
        });
    });
  });
});
