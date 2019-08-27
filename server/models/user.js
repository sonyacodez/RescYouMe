const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    emergencyContacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}]
})

const User = mongoose.model("User", userSchema)

module.exports = User
