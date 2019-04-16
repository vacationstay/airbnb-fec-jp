/* eslint-disable prefer-const */
const mongoose = require('mongoose');

// 'database' needed when were runnign with docker. otherwise, localhost works just fine
const dbURL = 'mongodb://database/reservations';
mongoose.connect(dbURL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', error => console.log('connection error:', error));
db.once('open', () => console.log('connected to mongodb!'));

module.exports = {
  db,
};
