var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
    carImage1: {type:String, data: Buffer, required:true},
    carImage2: {type:String, data: Buffer, required:true},
    carImage3: {type:String, data: Buffer, required:true},
});



module.exports = mongoose.model('CarMart',CarSchema)
