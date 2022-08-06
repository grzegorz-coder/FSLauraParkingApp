const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');


//pasery
// Content-type: application/JSON
app.use(bodyParser.json());

//fix cors
app.use(cors());

//db
require('./db/mongoose');

//routers
app.use('/api/', apiRouter);

//server
app.listen(port, function() {
    console.log('serwer słucha')
});



