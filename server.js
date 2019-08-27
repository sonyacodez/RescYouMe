const express = require('express') 
const app = express()
const api = require( './server/routes/api' )
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
// const webpush = require('web-push');

// const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
// const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

// // Replace with your email
// webpush.setVapidDetails('hadanyg@gmail.com', publicVapidKey, privateVapidKey);

mongoose.connect("mongodb://localhost/secureDB", { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', api)





let port = process.env.PORT || 4000

app.listen(port, function(){
    console.log(`Running on port ${port}`)
})