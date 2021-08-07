import React from 'react'
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { productsQuery } from './queries'
import { deleteProduct } from './queries'

const withGraphqlDelete = graphql(deleteProduct, {
    props: ({ mutate }) => ({
        deleteProduct: id => mutate({
            variables: id,
            refetchQueries: [{ query: productsQuery }]
        })
    })
})

export default compose(graphql(productsQuery), withGraphqlDelete)