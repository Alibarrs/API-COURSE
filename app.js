const express = require('express');
const app = express();

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

dotenv.config({ path: './config/config.env' });

app.use(express.json());

connectDatabase();

const jobs = require('./routes/jobs');
app.use('/api/v1', jobs);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listen on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
