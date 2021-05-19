const request = require('supertest');
const app = require('../src/app');

test('should list all users', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0]).toHaveProperty('name', 'Mary Jane');
    });
});

test('should insert user with success', () => {
  return request(app).post('/user')
    .send({ name: 'Han Solo', mail: 'hansolo@mail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Han Solo');
    });
});
