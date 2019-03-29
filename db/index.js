/* eslint-disable prefer-const */
const mongoose = require('mongoose');
const faker = require('faker');
const moment = require('moment');

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

// FAKE BOOKING INFO INSERTION FUNC
// eslint-disable-next-line no-unused-vars
const insertFakeBookingsInfo = () => {
  let fakeDocArr = [];
  for (let i = 0; i < 100; i += 1) {
    const rand = (min = 0, max = 1) => (Math.floor(Math.random() * max) + min);
    const randGuests = () => rand(1, 4);
    let sampleGuest = randGuests();
    const checkin = () => (faker.date.between('2018-04-01', '2018-12-31'));
    let sampleCheckin = checkin();
    const checkout = () => (faker.date.between(moment(sampleCheckin).add(1, 'days'), moment(sampleCheckin).add(rand(1, 7), 'days')));
    let sampleCheckout = checkout();
    let sampleAvail = rand(1, 100);

    let fake = {
      room_id: i,
      checkin: sampleCheckin,
      checkout: sampleCheckout,
      guests: sampleGuest,
      availabilityScore: sampleAvail,
    };
    fakeDocArr.push(fake);
  }
  Booking.create(fakeDocArr);
};
// uncomment to generate new dummy data
// insertFakeBookingsInfo();

module.exports = {
  Booking,
  db,
};
