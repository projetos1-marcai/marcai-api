const express = require('express');
const UserRoutes = require('@routes/UserRoutes');
const ServiceRoutes = require('@routes/ServiceRoutes');
const app  = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', UserRoutes);
app.use('/', ServiceRoutes);

module.exports = app;
