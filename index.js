const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');

require('./db/mongoose');
//routers
app.use('/', apiRouter);

//server
app.listen(port, function() {
    console.log('serwer słucha')
})