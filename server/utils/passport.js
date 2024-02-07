const passport = require('passport');
const passportGoogle = require('passport-google-oauth20');
const { User, ProfileData } = require('../db/models/index');

const defaultProfileDataValues = require('../constants/profileData');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./secret');

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  const userData = await User.findOne({ where: { googleId: user.googleId } }, { raw: true });
  done(null, userData.dataValues);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/auth/google/callback',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ where: { googleId: profile.id } }, { raw: true });
      req.session = {};
      if (!user) {
        const newUser = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0].value,
        });
        if (newUser) {
          const userProfile = await ProfileData.create(
            {
              ...defaultProfileDataValues,
              name: newUser.name,
              email: newUser.email,
              user_id: newUser.id,
            },
          );
          if (userProfile) {
            req.session.user = {
              id: newUser.id,
              name: newUser.name,
            };
            done(null, newUser);
          }
        }
      } else {
        req.session.user = {
          id: user.dataValues.id,
          name: user.dataValues.name,
        };
        done(null, user.dataValues);
      }
    },
  ),
);
