require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const auth = require('./routers/auth.routes');

const server = express();

const PORT = process.env.PORT || 8080;

serverConfig(server);

server.use('/auth', auth);

server.get('/', (req, res) => {
  res.send('Main Page');
});

server.listen(PORT, () => console.log(`Server is up on ${PORT} port`));
