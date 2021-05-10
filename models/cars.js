const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
  Image: String,
  Make:String,
  Model: String,
  Year: Number,
  Price: Number,
  Milage: Number,

})

const Cars = mongoose.model('Cars', carsSchema)

module.exports = Cars
