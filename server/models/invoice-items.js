const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceItemsSchema = new Schema({
    invoice_id: String,
    product_id: String,
    quantity: Number
})

module.exports = mongoose.model('Invoice_Item', invoiceItemsSchema)