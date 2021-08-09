import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
import { gql } from 'apollo-boost';
import React from 'react'
import { Mutation } from 'react-apollo';
import cn from 'classnames'

const useStyles = makeStyles({
    button: {
        width: '50%',
        height: '35px',
        border: '0',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    disagree: {
        backgroundColor: '#ef5350'
    },
    agree: {
        backgroundColor: '#9ccc65'
    }
})

export const PRODUCTS_QUERY = gql`
    query productsQuery {
        products {
            id
            name
            price
        }
    }
`

const DELETE_PRODUCT_MUTATION = gql`
    mutation deleteProduct($id: ID) {
        deleteProduct(id: $id) {
            id
        }
    }
`

const productRemoved = (client, { data }) => {
    const { allProducts } = client.readQuery({ query: PRODUCTS_QUERY })
    if (data.deleteProduct.removed) {
        client.writeQuery({
            query: PRODUCTS_QUERY,
            data: {
                allProducts: allProducts.filter(prod => prod.id !== data.deleteProduct.prod.id)
            }
        })
    }
}

const DeleteCofirm = ({ open, element, handleClose, handleDeleteConfirm }) => {
    const classes = useStyles()
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Вы уверены что хотите удалить это?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Нажимая кнопку "Agree", вы подтверждаете удаление продукта.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className={cn(classes.button, classes.disagree)} onClick={handleClose}>Disagree</button>
                    <Mutation mutation={DELETE_PRODUCT_MUTATION} update={productRemoved}>
                        {mutation => <button className={cn(classes.button, classes.agree)} onClick={() => {
                            return (
                                mutation({ variables: { id: element }, refetchQueries: [{ query: PRODUCTS_QUERY }] }),
                                handleDeleteConfirm()
                            )
                        }} autoFocus>Agree</button>}
                    </Mutation>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeleteCofirm