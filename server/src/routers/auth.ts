import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get('/google/redirect',
  passport.authenticate('google', { successRedirect: 'http://localhost:3000/profile/edit', failureRedirect: 'http://localhost:3000/login/error' }),
  (req, res) => {
    res.send(req.user);
  });

export default router;
