import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import ProductTable from './Table/Table'
import withHoc from './ProductsHoc'

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

const Products = ({data, ...props}) => {
    const classes = useStyles()
    const products = data.products
    return (
        <>
        {products === undefined ? <></> 
        :  <div className={classes.container}>
                <h2 className={classes.title}>Products</h2>
                <Button classes={{ root: classes.create }} variant="outlined">
                    Create
                </Button>
                <ProductTable products={products} />
            </div>}
        </>
    )
}

export default withHoc(Products)