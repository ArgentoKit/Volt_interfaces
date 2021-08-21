import { gql } from 'apollo-boost'

export const customersQuery = gql`
    query customersQuery {
        customers {
            id
            name
            address
            phone
        }
    }
`