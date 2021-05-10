const express = require('express')

const app = express()

require('dotenv').config()

const mongoose= require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const PORT = process.env.PORT

const carsController = require('./controllers/cars_controller.js')
app.use(express.json())
app.use('/cars', carsController)

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)

mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))



app.listen(PORT, ()=>{
  console.log('listening to port', PORT)
})
