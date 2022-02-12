const mongoose = require('mongoose');
const config = require('../config/env');

const MONGO_URL = config.MONGODB_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
  });
  
mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL, {
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    // useUnifiedTopology: true
  });
}

module.exports = {
  mongoConnect,
};
