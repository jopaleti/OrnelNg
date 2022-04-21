const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { isEmail } = require('validator');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please Enter an Email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please Enter a valid Email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter a Valid Password'],
        minlength: [6, 'Minimum Password length must be 6 characters']
    },
    register_date: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

module.exports = User = mongoose.model('user', UserSchema);