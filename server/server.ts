import express from 'express';
import MongoStore from 'connect-mongo';
import * as dotenv from 'dotenv';
import { connectToDatabase } from './routers/database/config';
// dotenv.config()

// const session = require('express-session');
  
const app = express();
const PORT:Number=8080;
  
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})
  
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})
