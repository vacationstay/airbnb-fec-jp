/* eslint-disable prefer-const */
const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost/reservations';
const db = mongoose.connect(dbURL, { useNewUrlParser: true });

const bookingSchema = mongoose.Schema({
  room_id: Number,
  checkin: Date,
  checkout: Date,
  guests: Number,
  availabilityScore: Number,
});

const Booking = mongoose.model('booking', bookingSchema);

module.exports = {
  Booking,
  db,
};
