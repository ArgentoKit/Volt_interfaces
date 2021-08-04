import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import withHoc from './InvoicesHoc'
import InvoicesTable from './Table'

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
    create: {
        display: 'inline-block',
        marginBottom: '12px'
    }
})

const Invoices = ({data, ...props}) => {
    const classes = useStyles()
    const invoices = data.invoices
    return (
        <>
        {console.log(data)}
        {invoices === undefined ? <></> 
        :  <div className={classes.container}>
                <h2 className={classes.title}>Invoices</h2>
                <Button classes={{ root: classes.create }} variant="outlined">
                    Create
                </Button>
                <InvoicesTable invoices={invoices}/>
            </div>}
        </>
    )
}

export default withHoc(Invoices)