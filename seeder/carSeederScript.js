const carData = require('./carSeeder');
const carMart = require('./carMart');
const connect2Db = require('../config/dbConfig');
const CarProduct = require('../models/carModel')
const CarMartModel = require('../models/carMart')

// initialize the db connection
const importData = async () => {
    await connect2Db();
    try {
        await CarProduct.deleteMany({})
        await CarProduct.insertMany(carData)
        console.info('Cars added to Database successfully')

        
        await CarMartModel.deleteMany({})
        await CarMartModel.insertMany(carMart)
        console.info('Car Mart added to Database successfully')

        process.exit()
    } catch (error) {
        console.error('Error in Data import')
        process.exit(1)
    }
}

importData();