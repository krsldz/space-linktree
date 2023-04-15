import express from "express";
import passport from "passport";
import User from "../models/User";

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


router.get('/user', async (req, res) => {
  const id = req.session?.user?.id;
  const currentUser = await User.findById(id);

  res.json({ email: currentUser?.email, name: currentUser?.name });
  });

  router.get('/logout', async (req, res) => {
    
    if (req.session) {
      req.session = null;
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
      res.redirect('/error');
    }
  });

export default router;
