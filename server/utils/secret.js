require('dotenv').config();

const { GOOGLE_CLIENT_ID } = process.env;
const { GOOGLE_CLIENT_SECRET } = process.env;
const { COOKIE_KEY } = process.env;

module.exports = { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, COOKIE_KEY };
