require("dotenv").config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully")
    } catch (error) {
        console.error('Connection to database failed')
        process.exit(1)
    }
}

module.exports = connectDB



