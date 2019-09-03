const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Contact = require('../models/contact')
const webpush = require('web-push')
const dotenv = require('dotenv')
dotenv.config()

// from .env
const publicKey = process.env.PUBLIC_PUSH_KEY || ''
const privateKey = process.env.PRIVATE_PUSH_KEY || ''

router.get('/existingUser/:name/:email', (req,res) => {
  let email = req.params.email
  let name = req.params.name
  User.findOne({ email, name }).exec((err,user) => err ? res.send(err) : res.send(user))
});

router.get('/userContacts/:id', (req,res) => {
  User.findOne({ _id: req.params.id }).exec((err,user) => console.log(user.emergencyContacts))
  // User.findOne({ _id: req.params.id })
  //     .populate('emergencyContacts')
  //     .exec((err,user) => {
  //       console.log(user)
  //       res.send(user.emergencyContacts)})
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

router.put("/updateUserContactNumber/:id", (req,res) => {
    Contact.findOneAndUpdate({ _id: req.params.id }, req.body, (err,body) => res.end())
})

router.delete('/deleteUserContact', (req,res) => {
    // Contact.findOneAndRemove({ _id: req.params.id }, (err,body) => res.end())
    // User.findOne({ _id: req.params.id }, (err,body) => res.end())
// router.delete('/deleteUserContact/:id', (req,res) => {
    // Contact.findOneAndRemove({ _id: req.params.id }, (err,body) => res.end())
});

//FOR PUSH NOTIFICATIONS

//this post route saves user's device link
router.post('/subscribe', async (req, res) => {
  const newUser = new User( req.body )
  try {
    await newUser.save()
    if (!newUser) throw new Error('User not saved')
    res.status(201)
  } 
  catch(e) {
    console.log(e.errmsg)
    res.status(400).send(e.errmsg)
  }
})

router.put("/updateUser/:id", (req,res) => {
  const subscriptionObject = req.body.subscriptionObject
  const location = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    address: req.body.address
  }
  User.findOneAndUpdate({ _id: req.params.id }, { location, subscriptionObject }, (err,body) => res.end())
})

//the actual push notification route

router.post('/alert', async (req, res) => {
  webpush.setVapidDetails('mailto:mail@mail.com', publicKey, privateKey)
  const { endpoint } = req.body
  const otherUsers = await User.find({ 'subscriptionObject.endpoint': { $ne: endpoint } })
  console.log(otherUsers)
  const currentUser = await User.findOne({ 'subscriptionObject.endpoint.type': { endpoint } })
  console.log(currentUser)
  const message = JSON.stringify({
      title: `Your fellow human, ${currentUser.name}, needs your help ASAP! 
      ${currentUser.name} is located at ${currentUser.location.address}.`,
      body: '',
      icon: 'https://tpmbc.com/wp-content/uploads/2018/02/TrailCondition.png'
  })
  console.log(message)

  otherUsers.map(async(el) => {
      try {
          const notify = await webpush.sendNotification( el.subscriptionObject, message )
          console.log(notify)
      } 
      catch (e) { console.error(e) }
  })
})



module.exports = router