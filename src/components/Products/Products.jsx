import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import ProductTable from './Table/Table'

const useStyles = makeStyles({
    container: {
        maxWidth: '800px',
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

const Products = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Products</h2>
            <Button classes={{root: classes.create}} variant="outlined">
                Create
            </Button>
            <ProductTable />
        </div>
    )
}

export default Products