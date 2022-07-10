const express = require('express');
const router = express.Router();

const parkingChangesActions = require('../actions/api/parkingChanges');
//download all parkings
router.get('/parkings', parkingChangesActions.getAllParkings);
//download one parking 
router.get('/parkings/:id', parkingChangesActions.getParkingApp);
//add parking data
router.post('/parkings', parkingChangesActions.saveParkingApp); 
//edit parking data
router.put('/parkings/:id', parkingChangesActions.updateParkingApp);
//delete parking data  
router.delete('/parkings/:id', parkingChangesActions.deleteParkingApp);

module.exports = router;

