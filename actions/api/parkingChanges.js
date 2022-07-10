const ParkingApp = require('../../db/models/parkingApp')


class ParkingsActions {
    async saveParkingApp(req, res) {
        //saving parkings 
        const name = req.body.name;
        const pNumber = req.body.pNumber;
        const rNumber = req.body.rNumber; 
        const parkingNumber = req.body.parkingNumber;

        let parking;

        try {
            parking = new ParkingApp({name, pNumber, rNumber, parkingNumber});
            await parking.save();  
        } catch (err) {
          return res.status(200).json({ message: err.message});
        }
        res.status(201).json(parking);
    }
     
    async getAllParkings(req, res) {
        //download parkings
        const doc = await ParkingApp.find({});
        res.status(200).json(doc);
    }
      
    async getParkingApp(req, res) {
        //download parking  
        const id = req.params.id;
        const parking = await ParkingApp.findOne({ _id: id});
        res.status(200).json(parking);
    }

    async updateParkingApp(req, res) {
        //update parking 
        const id = req.params.id;
        const name = req.body.name;
        const pNumber = req.body.pNumber;
        const rNumber = req.body.rNumber; 
        const parkingNumber = req.body.parkingNumber; 
        const parking = await ParkingApp.findOne({ _id: id });
        parking.name = name;
        parking.pNumber = pNumber;
        parking.rNumber = rNumber;
        parking.parkingNumber = parkingNumber;
        await parking.save();
                
        res.status(201).json(parking);
    }

    async deleteParkingApp(req, res) {
        //delete parking
        const id = req.params.id;
        await ParkingApp.deleteOne({ _id: id })
        res.sendStatus(204);
    }

}
module.exports = new ParkingsActions();