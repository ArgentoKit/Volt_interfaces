import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import ProductTable from './Table/Table'
import withHoc from './ProductsHoc'
import CreateProduct from './CreateProductIDialog'

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
    const [openCreatingForm, setOpenCreatingForm] = React.useState(false)

    const classes = useStyles()
    const products = data.products

    const handleCreatingForm = () => {
        setOpenCreatingForm(true)
    }
    const handleCloseCreatingForm = () => {
        setOpenCreatingForm(false)
    }

    return (
        <>
        {products === undefined ? <></> 
        :  <div className={classes.container}>
                <h2 className={classes.title}>Products</h2>
                <Button classes={{ root: classes.create }} onClick={handleCreatingForm} variant="outlined">
                    Create
                </Button>
                <ProductTable products={products}/>
                <CreateProduct openCreatingForm={ openCreatingForm } handleCloseCreatingForm={ handleCloseCreatingForm }/>
            </div>}
        </>
    )
}

export default withHoc(Products)