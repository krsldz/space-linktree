import express from 'express';
import passport from "passport";
import cookieSession from "cookie-session";
import cors from 'cors';

import auth from "./routers/auth";
import './routers/passport';
import { connectToDB } from './database/connect';
import { COOKIE_KEY } from './utils/secret';
  
const app = express();
const PORT:Number=8080;

app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})

app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [COOKIE_KEY || ''],
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(cors({
    origin: true,
    credentials: true,
  }));

connectToDB();

app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})

app.use("/auth", auth);
