const router = require('express').Router();
const passport = require('passport');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', { successRedirect: 'http://localhost:3000/profile', failureRedirect: 'http://localhost:3000/login/error' }),
  (req, res) => {
    res.send(req.user);
  },
);

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session = null;
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
