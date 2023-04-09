import express from "express";
const router = express.Router();
import passport from "passport";


router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("This is the callback route");
});

export default router;
