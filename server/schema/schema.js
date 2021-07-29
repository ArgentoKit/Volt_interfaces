const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLSchema, GraphQLID, GraphQLList, GraphQLInt } = graphql

// Экземпляры Mongoose-схем
const Products = require('../models/product')
const Customers = require('../models/customer')
const Invoices = require('../models/invoice')

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
        id: {type: GraphQLID},
        customer_id: {type: GraphQLID},
        discount: {type: GraphQLInt},
        total: {type: GraphQLFloat}
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
        }
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
            args: { id: {type: GraphQLID} },
            resolve(parent, args) {
                return Invoices.findById(args.id)
            }
        },
        invoices: {
            type: new GraphQLList(InvoiceType),
            resolve(parent, args) {
                return Invoices.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})