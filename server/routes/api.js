const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Contact = require('../models/contact')

router.get('/users', (req,res) => User.find({}).exec((err,data) => res.send(data)));

router.get('/userContacts/:id', (req,res) => {
    User.findOne({ _id: req.params.id })
        .populate('emergencyContacts')
        .exec((err,user) => res.send(user.emergencyContacts))
});

router.post('/newUserContact/:id', (req,res) => {
    let contact = new Contact(req.body)
    contact.save()
    User.findOne({_id: req.params.id}).exec((err,user) => {
        user.emergencyContacts.push(contact)
        user.save()
        res.end()
    })
});

router.post('/user', (req,res) => {
    let client = new User(req.body)
    client.save()
    res.end()
});

router.delete('/deleteUserContact/:id', (req,res) => Contact.findOneAndRemove({ _id: req.params.id }, (err,body) => res.end()));

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

module.exports = router