const request = require('supertest');
const app = require('../../src/app');

const mail = `${Date.now()}@mail.com`;

test('should list all users', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('should insert user with success', () => {
  return request(app).post('/users')
    .send({ name: 'Han Solo', mail, passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Han Solo');
    });
});

test('should not insert a user without name', () => {
  return request(app).post('/users')
    .send({ mail, passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Name is required');
    });
});

test('should not insert a user without email', async () => {
  const result = await request(app).post('/users')
    .send({ name: 'Han Solo', passwd: '123456' });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Email is required');
});

test('should not insert a user without password', () => {
  return request(app).post('/users')
    .send({ name: 'Han Solo', mail })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Password is required');
    });
});

test('should not insert a user with an existing email', () => {
  return request(app).post('/users')
    .send({ name: 'Han Solo', mail, passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('There is already exists a user with this email');
    });
});
