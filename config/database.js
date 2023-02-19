const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`MongoDB Database connected with host: ${conn.connection.host}`);
    });
};

module.exports = connectDatabase;
