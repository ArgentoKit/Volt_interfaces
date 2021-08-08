import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import { gql } from 'apollo-boost';
import React from 'react'
import { Mutation } from 'react-apollo';

export const PRODUCTS_QUERY = gql`
    query productsQuery {
        products {
            id
            name
            price
        }
    }
`

export const DELETE_PRODUCT_MUTATION = gql`
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
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Вы уверены что хотите удалить это?"}</DialogTitle>
                <DialogActions>
                    <button onClick={ handleClose }>Disagree</button>
                    <Mutation mutation={ DELETE_PRODUCT_MUTATION } update={ productRemoved }>
                        {mutation => <button onClick={() => {
                            return (
                                mutation({ variables: { id: element }, refetchQueries: [{ query: PRODUCTS_QUERY}] }),
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