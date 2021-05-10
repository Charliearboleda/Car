const express = require('express')

const cars = express.Router()

const Cars = require('../models/cars.js')

cars.get('/',(req,res)=>{
  res.send('cars is working')
})

cars.post('/', (req,res)=>{
  Cars.create(req.body, (err, createdCar)=>{
    Cars.find({}, (err, foundCar)=>{
      res.json(foundCar)
    })
  })
})


module.exports = cars
