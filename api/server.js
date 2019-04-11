const express = require('express');
const helmet = require('helmet');

const planetsRouter = require('../planets/planets-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.use('/api/planets', planetsRouter);

module.exports = server;
