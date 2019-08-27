const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Contact = require('../models/contact')

router.get('/users', function (req, res) {
    User.find({}).exec(function (err, data) {
        res.send(data)
    })
})

router.get('/emergencyContacts/:id', function (req, res) {
    let id = req.params.id
    User.findOne({ _id: id })
        .populate('emergencyContacts')
        .exec(function (err, user) {
            res.send(user.emergencyContacts)
        })
})


router.put('/userEmergencyContacts', function (req, res) {
    let id = req.body._id
    let contact = new Contact(req.body.contact)
    contact.save()
    User.findOne({_id: id}).exec(function (err, user) {
        user.emergencyContacts.push(contact)
        user.save()
        res.end()
    })
})

router.post('/user', function (req, res) {
    let client = new User (req.body)
    client.save()
    res.end()
})

module.exports = router