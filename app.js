require('dotenv').config();
const express = require('express');
const app = express();
const mongoClient = require('mongodb');
const mongoose = require('mongoose');

require('./router').initRouter(app);

mongoose.connect(process.env.mongodb, {useNewUrlParser : true, useUnifiedTopology : true});

app.listen(8000);
