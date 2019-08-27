const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Contact = require('../models/contact')

router.get('/users', function (req, res) {
    User.find({}).exec(function (err, data) {
        res.send(data)
    })
})

router.get('/userContacts/:id', function (req, res) {
    let id = req.params.id
    User.findOne({ _id: id })
        .populate('emergencyContacts')
        .exec(function (err, user) {
            res.send(user.emergencyContacts)
        })
})

// router.post('/subscribe', (req, res) => {
//     const subscription = req.body;
//     res.status(201).json({});
//     const payload = JSON.stringify({ title: 'test' });
  
//     console.log(subscription);
  
//     webpush.sendNotification(subscription, payload).catch(error => {
//       console.error(error.stack);
//     });
//   });

//   app.use(require('express-static')('./'));


router.put('/newUserContact', function (req, res) {
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