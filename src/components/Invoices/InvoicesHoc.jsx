import React from 'react'
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { invoicesQuery } from './queries'

export default compose(graphql(invoicesQuery))