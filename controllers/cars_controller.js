const express = require('express')

const cars = express.Router()

cars.get('/',(req,res)=>{
  res.send('cars is working')
})

module.exports = cars
