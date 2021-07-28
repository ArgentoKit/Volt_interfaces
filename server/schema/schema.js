const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql

const ProductsType = new GraphQLObjectType({
    name: 'Products',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        price: { type: GraphQLInt }
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        product: {
            type: ProductsType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {

            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query
})