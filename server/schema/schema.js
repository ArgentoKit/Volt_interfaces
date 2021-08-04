const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLSchema, GraphQLID, GraphQLList, GraphQLInt } = graphql

// Экземпляры Mongoose-схем
const Products = require('../models/product')
const Customers = require('../models/customer')
const Invoices = require('../models/invoice')
const Invoice_Items = require('../models/invoice-items')

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLFloat }
    })
})
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})
const InvoiceType = new GraphQLObjectType({
    name: 'Invoice',
    fields: () => ({
        id: { type: GraphQLID },
        customer_id: { type: GraphQLID },
        discount: { type: GraphQLFloat },
        total: { type: GraphQLFloat },
        customer: {
            type: CustomerType,
            resolve({customer_id}, args) {
                return Customers.findById(customer_id)
            }
        }
    })
})
const InvoiceItemType = new GraphQLObjectType({
    name: 'InvoiceItem',
    fields: () => ({
        id: { type: GraphQLID },
        invoice_id: { type: GraphQLID },
        product_id: { type: GraphQLID },
        quantity: { type: GraphQLInt }
    })
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCustomer: {
            type: CustomerType,
            args: {
                name: { type: GraphQLString },
                address: { type: GraphQLString },
                phone: { type: GraphQLString },
            },
            resolve(parent, args) {
                const customer = new Customers({
                    name: args.name,
                    address: args.address,
                    phone: args.phone
                })
                return customer.save()
            }
        },
        updateCustomer: {
            type: CustomerType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                address: { type: GraphQLString },
                phone: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Customers.findByIdAndUpdate(
                    args.id,
                    { $set: { name: args.name, address: args.address, phone: args.phone } },
                    { new: true }
                )
            }
        },
        deleteCustomer: {
            type: CustomerType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Customers.findByIdAndDelete(args.id)
            }
        },
        addProduct: {
            type: ProductType,
            args: {
                name: { type: GraphQLString },
                price: { type: GraphQLFloat },
            },
            resolve(parent, args) {
                const product = new Products({
                    name: args.name,
                    price: args.price,
                })
                return product.save()
            }
        },
        updateProduct: {
            type: ProductType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                price: { type: GraphQLFloat },
            },
            resolve(parent, args) {
                return Products.findByIdAndUpdate(
                    args.id,
                    { $set: { name: args.name, price: args.price } },
                    { new: true }
                )
            }
        },
        deleteProduct: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Products.findByIdAndDelete(args.id)
            }
        },
        addInvoice: {
            type: InvoiceType,
            args: {
                customer_id: { type: GraphQLID },
                discount: { type: GraphQLFloat },
                total: { type: GraphQLFloat }
            },
            resolve(parent, args) {
                const invoice = new Invoices({
                    customer_id: args.customer_id,
                    discount: args.discount,
                    total: args.total
                })
                return invoice.save()
            }
        },
        updateInvoice: {
            type: InvoiceType,
            args: {
                id: { type: GraphQLID },
                customer_id: { type: GraphQLID },
                discount: { type: GraphQLFloat },
                total: { type: GraphQLFloat }
            },
            resolve(parent, args) {
                return Invoices.findByIdAndUpdate(
                    args.id,
                    { $set: { customer_id: args.customer_id, discount: args.discount, total: args.total, } },
                    { new: true }
                )
            }
        },
        deleteInvoice: {
            type: InvoiceType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Invoices.findByIdAndDelete(args.id)
            }
        },
        addInvoiceItem: {
            type: InvoiceItemType,
            args: {
                invoice_id: { type: GraphQLID },
                product_id: { type: GraphQLID },
                quantity: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const invoice_item = new Invoice_Items({
                    invoice_id: args.invoice_id,
                    product_id: args.product_id,
                    quantity: args.quantity
                })
                return invoice_item.save()
            }
        },
        updateInvoiceItem: {
            type: InvoiceItemType,
            args: {
                id: { type: GraphQLID },
                invoice_id: { type: GraphQLID },
                product_id: { type: GraphQLID },
                quantity: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return Invoice_Items.findByIdAndUpdate(
                    args.id,
                    { $set: { invoice_id: args.invoice_id, product_id: args.product_id, quantity: args.quantity, } },
                    { new: true }
                )
            }
        },
        deleteInvoiceItem: {
            type: InvoiceItemType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Invoice_Items.findByIdAndDelete(args.id)
            }
        },
    }
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Products.findById(args.id)
            }
        },
        customer: {
            type: CustomerType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Customers.findById(args.id)
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Products.find({})
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parent, args) {
                return Customers.find({})
            }
        },
        invoice: {
            type: InvoiceType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Invoices.findById(args.id)
            }
        },
        invoices: {
            type: new GraphQLList(InvoiceType),
            resolve(parent, args) {
                return Invoices.find({})
            }
        },
        invoiceItem: {
            type: InvoiceItemType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Invoice_Items.findById(args.id)
            }
        },
        invoice_Items: {
            type: new GraphQLList(InvoiceItemType),
            resolve(parent, args) {
                return Invoice_Items.find({})
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})