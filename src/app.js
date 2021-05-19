const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'Mary Jane', mail: 'mary@mail.com' },
  ];
  res.status(200).json(users);
});

app.post('/user', (req, res) => {
  res.status(201).json(req.body);
});

module.exports = app;
