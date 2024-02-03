const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');

const serverConfig = (server) => {
  server.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [process.env.COOKIE_KEY || 'test'],
    }),
  );
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  }));
};

module.exports = serverConfig;
