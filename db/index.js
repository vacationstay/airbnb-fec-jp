/* eslint-disable prefer-const */
const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost/reservations';
mongoose.connect(dbURL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', error => console.log('connection error:', error));
db.once('open', () => console.log('connected to mongodb!'));

module.exports = {
  db,
};
