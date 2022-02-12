const mongoose = require('mongoose');
const config = require('../../config/env');

const MONGO_URL = config.MONGODB_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
  });
  
mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
