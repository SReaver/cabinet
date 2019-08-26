const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: false
    }
})
module.exports = User = mongoose.model('user', UserSchema);