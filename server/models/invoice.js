const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    customer_id: String,
    discount: Number,
    total: Number
})

module.exports = mongoose.model('Invoice', invoiceSchema)