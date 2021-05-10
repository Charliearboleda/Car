const express = require('express')

const cars = express.Router()

const Cars = require('../models/cars.js')

cars.get('/', (req,res)=>{
  Cars.find({}, (err, foundCar)=>{
    res.json(foundCar)
  })
})

cars.post('/', (req,res)=>{
  Cars.create(req.body, (err, createdCar)=>{
    Cars.find({}, (err, foundCar)=>{
      res.json(foundCar)
    })
  })
})

cars.put('/:id', (req, res)=>{
  Cars.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundCar)=>{
    if (err) {
      res.send(err)
    } else {
      Cars.find({}, (err,foundCar)=>{
        res.json(foundCar)
      })
    }
  })
})


module.exports = cars
