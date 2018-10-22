const express = require('express');
const bodyParser = require('body-parser');
const routes  = require('./routes');
const app = express();

const mongoose = require('mongoose');
const mongoDB = 'mongodb://47.94.194.57:27017/test';
mongoose.connect(mongoDB, {useCreateIndex: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes);

const port = 4000;
app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});