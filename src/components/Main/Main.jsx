import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Customers from '../Customers/Customers'
import Invoices from '../Invoices/Invoices'
import Products from '../Products/Products'

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path='/invoices' component={Invoices} />
                <Route path='/products' component={Products} />
                <Route path='/customers' component={Customers} />
            </Switch>
        </div>
    )
}

export default Main