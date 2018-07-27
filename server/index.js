const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB setup
// const username = 'root';
// const password = 'root';
const dbhost = 'localhost';
const dbport = '27017';
const database = 'auth';
const mongoUrl = `mongodb://${dbhost}:${dbport}/${database}`

mongoose.connect(mongoUrl).catch((err) => {
    console.error(err);
});

// app setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.port || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on: ', port);