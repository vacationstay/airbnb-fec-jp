const moment = require('moment');
const faker = require('faker');
const mongoose = require('mongoose');
const { Booking } = require('./models/booking.js');
const { db } = require('./index.js');

// FAKE BOOKING INFO INSERTION FUNC
// eslint-disable-next-line no-unused-vars
const insertFakeBookingsInfo = () => {
  const fakeDocArr = [];
  for (let i = 0; i < 100; i += 1) {
    const rand = (min = 0, max = 1) => (Math.floor(Math.random() * max) + min);
    const randGuests = () => rand(1, 4);
    const sampleGuest = randGuests();
    const checkin = () => (faker.date.between('2018-04-01', '2018-12-31'));
    const sampleCheckin = checkin();
    const checkout = () => (faker.date.between(moment(sampleCheckin).add(1, 'days'), moment(sampleCheckin).add(rand(1, 7), 'days')));
    const sampleCheckout = checkout();
    const sampleAvail = rand(1, 100); 

    const fake = {
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

insertFakeBookingsInfo();
