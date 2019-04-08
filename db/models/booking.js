const mongoose = require('mongoose');

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
};
