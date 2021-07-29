const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLSchema, GraphQLID, GraphQLList } = graphql

const products = []
const customers = []

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
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                //return products.filter(product => product.customerId === parent.id)
            }
        }
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //return products.find(prod => prod.id == args.id)
            }
        },
        customer: {
            type: CustomerType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //return customers.find(customer => customer.id == args.id)
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return products
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parent, args) {
                return customers
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query
})
