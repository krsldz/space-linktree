import express from 'express';
import auth from "./routers/auth";
import { connectToDatabase } from './routers/database/config';
import './routers/passport';

// const session = require('express-session');
  
const app = express();
const PORT:Number=8080;

app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})

connectToDatabase();
  
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})

app.use("/auth", auth);
