const request = require('supertest');
// const express = require('express');
const { app } = require('./index.js');
// request = request('http://localhost:9000');

// supertest(app)
//   .get('/1')
//   .expect(200)
//   .end((err, res) => {
//     if (err) {
//       throw err;
//     }
//   });

request(app).get('/1').expect(200, (err) => {
  if (err) {
    throw err;
  }
});
