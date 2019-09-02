const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserPushSchema = new mongoose.Schema({
    //takes a user's device unique key and returns a link to eb able to send this user a notification
    subscriptionObject: {
        endpoint: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        expirationTime: { type: String, trim: true },
        keys: {
            p256dh: { type: String, trim: true },
            auth: { type: String, trim: true }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserPush = mongoose.model('UserPush', UserPushSchema)

module.exports = UserPush
