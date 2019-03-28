const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = 9000;
var app = express();

app.use(express.static('public'));

app.post('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, () => (console.log('server up and runnning on port ' + port)));