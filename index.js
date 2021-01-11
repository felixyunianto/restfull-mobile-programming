require('dotenv').config({})
require('dotenv').config({})
const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const mainRouter = require('./src/routes');

app.listen(port, () => {
    console.log("Server is running on port "+ port);
})

app.use(logger("dev"));



app.use(bodyParser.urlencoded({
    extended : false
}))

app.use(bodyParser.json());

app.use('/', mainRouter)
module.exports = app