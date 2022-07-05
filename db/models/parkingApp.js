const mongoose = require('mongoose');

const ParkingApp = mongoose.model('ParkingApp', {
    title: String,
    body: String,
});

module.exports = ParkingApp; 