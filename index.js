const express = require('express');
const parser = require('body-parser');
// const path = require('path');

const port = 9000;
const app = express();
const { db, Booking } = require('./db/index');

app.use(express.static('public'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.post('/rooms/:room_id', (req, res) => {
  let roomId = req.params.room_id;
  const genRandAvailScore = () => (Math.floor(Math.random() * 100));
  let temp = {
    room_id: roomId,
    checkin: req.body.checkin,
    checkout: req.body.checkout,
    guests: req.body.guest,
    availabilityScore: genRandAvailScore(),
  };
  Booking.create(temp, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  });
});

app.get('/rooms/:room_id', (req, res) => {
  // eslint-disable-next-line prefer-const
  let roomId = req.params.room_id;
  Booking.findOne({ room_id: roomId }, 'availabilityScore', (err, id) => {
    if (err) {
      console.log('issue getting info for this room id');
      res.sendStatus(404);
    } else {
      res.send(JSON.stringify(id));
    }
  });
});

app.listen(port, () => (console.log(`server up and runnning on port ${port}`)));

exports = {
  app,
};
