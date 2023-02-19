const express = require('express');
const app = express();

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

dotenv.config({ path: './config/config.env' });

const middleware = (req, res, next) => {
  console.log('halo ini adalah text dari middleware');
  req.requestUrl = req.url;
  next();
};

app.use(middleware);

connectDatabase();

const jobs = require('./routes/jobs');
app.use('/api/v1', jobs);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listen on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
