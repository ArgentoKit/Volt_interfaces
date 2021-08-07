import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import ProductTable from './Table/Table'
import withHoc from './ProductsHoc'

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

const Products = ({data, ...props}) => {
    const classes = useStyles()
    const products = data.products
    return (
        <>
        {console.log(props)}
        {products === undefined ? <></> 
        :  <div className={classes.container}>
                <h2 className={classes.title}>Products</h2>
                <Button classes={{ root: classes.create }} variant="outlined">
                    Create
                </Button>
                <ProductTable products={products} deleteProduct={props.deleteProduct}/>
            </div>}
        </>
    )
}

export default withHoc(Products)