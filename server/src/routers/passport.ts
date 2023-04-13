import passport from "passport";
import passportGoogle from "passport-google-oauth20";

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../utils/secret';
import User from '../models/User';

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
      passReqToCallback   : true
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
            id: newUser._id,
            name: newUser.name,
          }
          done(null, newUser);
        }
      } else {
        req.session.user = {
          id: user._id,
          name: user.name,
        }
        done(null, user);
      }
    }
  )
);
