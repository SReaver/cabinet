const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String
    },
    address: {
        type: String
    },
    description: {
        type: String
    },
    payment: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    },
    payMethod: {
        type: String,
        required: false
    },
    regType: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    registeredUsers: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ]
})
module.exports = Event = mongoose.model('event', EventSchema);