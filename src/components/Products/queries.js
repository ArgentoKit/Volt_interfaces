import { gql } from 'apollo-boost'

export const productsQuery = gql`
    query productsQuery {
        products {
            id
            name
            price
        }
    }
`

export const deleteProduct = gql`
    mutation deleteProduct($id: ID) {
        deleteProduct(id: $id)
    }
`