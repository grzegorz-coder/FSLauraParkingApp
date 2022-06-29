const express = require('express');
const app = express();
const {port} = require('./config');
const router = require('./routes/Api');

//routers
const apiRouter = router
app.use('/api', apiRouter)

//server
app.listen(port, function() {
    console.log('serwer słucha')
})