const ParkingApp = require('../../db/models/parkingApp')

module.exports = {
    saveParkingApp(req, res) {

        const newParkingApp = new ParkingApp({
            title: 'nowy djen',
            body: 'tralala' 
        });
        
        newParkingApp.save().then(() =>{
            console.log('aplikacja zapisana')
        }); 

    res.send('Serwer działa!');
    }
}