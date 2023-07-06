const dotenv = require('dotenv');

dotenv.config();

const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
    calendarId: process.env.GOOGLE_CALENDAR_ID,
  },
  serverless: {
    host: process.env.SERVERLESS_HOST,
    region: process.env.SERVERLESS_REGION,
  },
};

module.exports = config;