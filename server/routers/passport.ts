import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import User from './database/UserModal/User';

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
      clientID: '562682057352-i161ldv4cl8qoei5brr2e97ccqqqmo42.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: '/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      if (!user) {
        const newUser = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0].value,
        });
        if (newUser) {
          done(null, newUser);
        }
      } else {
        done(null, user);
      }
    }
  )
);
