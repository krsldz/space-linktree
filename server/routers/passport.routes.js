const passport = require('passport');
const passportGoogle = require('passport-google-oauth20');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../utils/secret');
const { User } = require('../db/models/index');

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(+id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      req.session = {};
      if (!user) {
        const newUser = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0].value,
        });
        if (newUser) {
          req.session.user = {
            id: newUser.id,
            name: newUser.name,
          };
          done(null, newUser);
        }
      } else {
        req.session.user = {
          id: user.id,
          name: user.name,
        };
        done(null, user);
      }
    },
  ),
);
