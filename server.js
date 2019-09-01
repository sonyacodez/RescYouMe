const express = require('express') 
const app = express()
const api = require( './server/routes/api' )
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
const dotenv = require('dotenv')
const path = require('path')


dotenv.config()

// const mongoUrl = process.env.MONGO_URL||"mongodb://localhost/secureDB"
const dbUrl =
  process.env.MONGO_URL || 'mongodb://localhost:27017/secureDB'

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('connected to database')
  })
  .catch(() => {
    console.log('failed to connect to database')
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', api)

// serve React app from client/build
app.use(express.static(path.join(__dirname, './build')))
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname + './build/index.html'))
})


let port = process.env.PORT || 4000

app.listen(port, function(){
    console.log(`Running on port ${port}`)
})

