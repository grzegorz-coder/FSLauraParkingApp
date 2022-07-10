const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//parsers
// Content-type: application/JSON

app.use(bodyParser.json());

//db
require('./db/mongoose');

//routers
app.use('/api/', apiRouter);

//server
app.listen(port, function() {
    console.log('serwer słucha')
})