import React from 'react'
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { customersQuery } from './queries'

export default compose(graphql(customersQuery))