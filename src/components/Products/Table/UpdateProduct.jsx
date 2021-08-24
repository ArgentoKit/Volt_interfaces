import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core'
import { gql } from 'apollo-boost'
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { PRODUCTS_QUERY } from './DeleteConfirm'

const useStyles = makeStyles({
    title: {
        textAlign: 'center'
    },
    fieldsBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        width: '300px',
        margin: '5px 0px'
    },
    actionsBox: {
        display: 'flex',
        justifyContent: 'center'
    },
    createButton: {
        width: '300px',
        height: '35px',
        margin: '0 0 10px 0',
        border: '0',
        borderRadius: '8px',
        backgroundColor: '#9ccc65',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
    }
})

const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: ID, $name: String, $price: Float) {
    updateProduct(id: $id, name: $name, price: $price) {
      name
      price
    }
  }
`

const UpdateProduct = ({ open, handleClose, item }) => {
    const classes = useStyles()
    const [product, setProduct] = useState({
        id: item.id,
        name: item.name,
        price: item.price
    })

    const handleUpdateSubmit = () => {
        handleClose()
    }

    const handleChange = (e) => {
        const value = e.target.value
        setProduct({
            ...product,
            [e.target.name]:value
        })
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle classes={{ root: classes.title }} id="alert-dialog-title">{"Редактирование товара"}</DialogTitle>
                <DialogContent>
                    <form noValidate autoComplete="off">
                        <div className={classes.fieldsBox}>
                            <FormControl variant="outlined" classes={{ root: classes.textField }}>
                                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                                <OutlinedInput required autoFocus
                                    id="component-outlined"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                    label="Название товара" />
                            </FormControl>
                            <FormControl variant="outlined" classes={{ root: classes.textField }}>
                                <InputLabel htmlFor="component-outlined">Price</InputLabel>
                                <OutlinedInput required
                                    id="component-outlined"
                                    name="price"
                                    value={product.price}
                                    onChange={handleChange}
                                    label="Цена товара" />
                            </FormControl>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions classes={{ root: classes.actionsBox }}>
                    <Mutation mutation={UPDATE_PRODUCT}>
                        {mutation => <button className={classes.createButton} onClick={() => {
                            return (
                                mutation({
                                    variables: { id: item.id, name: product.name, price: Number.parseFloat(product.price) },
                                    refetchQueries: [{ query: PRODUCTS_QUERY }]
                                }),
                                handleUpdateSubmit()
                            )
                        }}>Подтвердить</button>}
                    </Mutation>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UpdateProduct