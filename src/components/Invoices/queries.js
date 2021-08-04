import { gql } from 'apollo-boost'

export const invoicesQuery = gql`
    query invoicesQuery {
        invoices {
            customer_id
            discount
            total
            customer {
                name
            }
        }
    }
`