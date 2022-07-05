const express = require('express');
const router = express.Router();

const parkingChangesActions = require('../actions/api/parkingChanges');

router.get('/', parkingChangesActions.saveParkingApp);
    
module.exports = router;

