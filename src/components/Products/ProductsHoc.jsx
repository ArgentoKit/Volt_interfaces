import React from 'react'
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { productsQuery } from './queries'

export default compose(graphql(productsQuery))