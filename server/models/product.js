const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Экземпляр Mongoose-схемы
const productSchema = new Schema({
    name: String,
    price: Number
})

module.exports = mongoose.model('Product', productSchema)