const request = require('supertest');
const app = require('../../src/app');

test('should list all users', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('should insert user with success', () => {
  const mail = `${Date.now()}@mail.com`;
  return request(app).post('/user')
    .send({ name: 'Han Solo', mail, passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Han Solo');
    });
});
