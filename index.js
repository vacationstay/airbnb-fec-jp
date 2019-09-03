const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const port = 9000;
const app = express();
const { db } = require('./db/index');
const { Booking } = require('./db/models/booking');

app.use(morgan('dev'));
app.use('/rooms/:id', express.static(path.join(__dirname, 'client/dist')));
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// to be deprecated
// app.post('/api/rooms/:room_id', (req, res) => {
//   const roomId = req.params.room_id;
//   const genRandAvailScore = () => (Math.floor(Math.random() * 100));
//   const temp = {
//     room_id: roomId,
//     checkin: req.body.checkin,
//     checkout: req.body.checkout,
//     guests: req.body.guest,
//     availabilityScore: genRandAvailScore(),
//   };
//   Booking.create(temp, (err) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(201);
//     }
//   });
// });

app.get('/api/bookings/:room_id', (req, res) => {
  let roomId = req.params.room_id;
  Booking.findOne({ room_id: roomId }, 'availabilityScore price', (err, id) => {
    if (err) {
      console.log('issue getting info for this room id');
      res.sendStatus(404);
    } else {
      console.log(id);
      res.send(JSON.stringify(id));
    }
  });
});

app.listen(port, () => (console.log(`server up and runnning on port ${port}`)));

exports = {
  app,
};
