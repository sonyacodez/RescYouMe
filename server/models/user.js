const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    location: {
        latitude: Number,
        longitude: Number,
        address: String
    },
    emergencyContacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
    createdAt: {
        type: Date,
        default: Date.now
    },
    subscriptionObject: {
        endpoint: {
            type: String,
            trim: true,
            required: false,
            unique: true
        },
        expirationTime: { type: String, trim: true },
        keys: {
            p256dh: { type: String, trim: true },
            auth: { type: String, trim: true }
        }
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User
