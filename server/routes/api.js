const express = require('express')
const router = express.Router()
const User = require('../models/user')
const UserPush = require('../models/userPush')
const Contact = require('../models/contact')
const webpush = require('web-push')
const dotenv = require('dotenv')
dotenv.config()

// from .env
const publicKey = process.env.PUBLIC_PUSH_KEY || ''
const privateKey = process.env.PRIVATE_PUSH_KEY || ''
console.log(privateKey)
console.log(publicKey)

router.get('/users', (req,res) => User.find({}).exec((err,data) => res.send(data)));

router.post('/user', (req,res) => {
    let newUser = new User(req.body)
    newUser.save()
    User.findOne({ name: "Keren" }, (err,user) => res.send(user));
});

router.get('/userContacts/:id', (req,res) => {
    // User.findOne({ _id: req.params.id })
    //     .populate('emergencyContacts')
    //     .exec((err,user) => res.send(user.emergencyContacts))
});

router.post('/newUserContact/:id', (req,res) => {
    let contact = new Contact(req.body)
    contact.save()
    // User.findOne({_id: req.params.id}).exec((err,user) => {
    //     user.emergencyContacts.push(contact)
    //     user.save()
    //     res.end()
    // })
});

router.put("/updateUserContactNumber/:id", (req,res) => {
    Contact.findOneAndUpdate({ _id: req.params.id }, req.body, (err,body) => res.end())
})

router.delete('/deleteUserContact/:id', (req,res) => {
    Contact.findOneAndRemove({ _id: req.params.id }, (err,body) => res.end())
});

//FOR PUSH NOTIFICATIONS

router.post('/subscribe', async (req, res) => {
    const newUser = new UserPush({
      subscriptionObject: req.body
    })
    try {
      // (8) save new user
      await newUser.save()
      // if not saved - throw error
      if (!newUser) throw new Error('User not saved')
      // otherwise - respond with OK
      res.status(201)
    } catch (e) {
      // if error - console and respond with error
      console.log(e.errmsg)
      res.status(400).send(e.errmsg)
    }
  })
  router.post('/alert', async (req, res) => {
    // endPoint of current user
    const { endpoint } = req.body
    // get users, except for current
    const users = await UserPush.find({
      'subscriptionObject.endpoint': {
        $ne: endpoint
      }
    })
    // set auth settings
    webpush.setVapidDetails('mailto:mail@mail.com', publicKey, privateKey)
  
    // prepare message
    const message = JSON.stringify({
      title: 'ALERT',
      body: 'Someone needs your help now!!!!',
      icon: 'https://tpmbc.com/wp-content/uploads/2018/02/TrailCondition.png'
    })

    // send push to every user from array
    users.map(async (el) => {
      try {
        const notify = await webpush.sendNotification(
          el.subscriptionObject,
          message
        )
        console.log(notify)
      } catch (e) {
        console.error(e)
      }
    })
  })



module.exports = router