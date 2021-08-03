import { gql } from 'apollo-boost'

export const customersQuery = gql`
    query customersQuery {
        customers {
            name
            address
            phone
        }
    }
`