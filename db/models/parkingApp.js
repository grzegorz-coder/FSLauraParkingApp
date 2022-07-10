const mongoose = require('mongoose');

const ParkingAppSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    pNumber: {
        type: String,
        required: true,
    },
    rNumber: {
        type: String,
        required: true,
    },
    parkingNumber: {
        type: String,
        required: true,
    },
})

const ParkingApp = mongoose.model('ParkingApp', ParkingAppSchema);

module.exports = ParkingApp; 