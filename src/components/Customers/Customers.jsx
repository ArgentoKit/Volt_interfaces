import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import withHoc from './CustomersHoc'
import CustomersTable from './Table'

const useStyles = makeStyles({
    container: {
        maxWidth: '1050px',
        margin: '0 auto',
    },
    title: {
        display: 'inline-block',
        fontSize: '32px',
        marginRight: '30px'
    },
})

const Customers = ({data, ...props}) => {
    const classes = useStyles()
    const customers = data.customers
    return (
        <>
        {customers === undefined ? <></> 
        :  <div className={classes.container}>
                <h2 className={classes.title}>Customers</h2>
                <Button classes={{ root: classes.create }} variant="outlined">
                    Create
                </Button>
                <CustomersTable customers={customers}/>
            </div>}
        </>
    )
}

export default withHoc(Customers)