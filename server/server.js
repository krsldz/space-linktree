require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const main = require('./routes/main.routes');
const auth = require('./routes/auth.routes');
const user = require('./routes/user.routes');
const profileData = require('./routes/profiledata.routes');
const publicLink = require('./routes/publiclink.routes');

const server = express();

const PORT = process.env.PORT || 8080;

serverConfig(server);

server.use('/auth', auth);
server.use('/user', user);
server.use('/profile', profileData);
server.use('/public', publicLink);
server.use('/', main);

server.listen(PORT, () => console.log(`Server is up on ${PORT} port`));
