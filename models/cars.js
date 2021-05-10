const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
  Image: String,
  Make:String,
  Model: String,
  Year: String,
  Price: String,
  Mileage: String,

})

const Cars = mongoose.model('Cars', carsSchema)

module.exports = Cars
