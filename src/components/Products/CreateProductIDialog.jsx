import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core'
import { gql } from 'apollo-boost'
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { PRODUCTS_QUERY } from './Table/DeleteConfirm'

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

const CREATE_PRODUCT = gql`
  mutation AddProduct($name: String, $price: Float) {
    addProduct(name: $name, price: $price) {
      name,
      price
    }
  }
`

const CreateProduct = ({ openCreatingForm, handleCloseCreatingForm }) => {
    const classes = useStyles()
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')

    const handleCreatingSubmit = () => {
        setProductName('')
        setProductPrice('')
        handleCloseCreatingForm()
    }

    return (
        <div>
            <Dialog
                open={openCreatingForm}
                onClose={handleCloseCreatingForm}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle classes={{ root: classes.title }} id="alert-dialog-title">{"Добавить товар"}</DialogTitle>
                <DialogContent>
                    <form noValidate autoComplete="off">
                        <div className={classes.fieldsBox}>
                            <FormControl variant="outlined" classes={{ root: classes.textField }}>
                                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                                <OutlinedInput  required 
                                                id="component-outlined" 
                                                name="name"
                                                value={productName} 
                                                onChange={e=>setProductName(e.target.value)} 
                                                label="Название товара" />
                            </FormControl>
                            <FormControl variant="outlined" classes={{ root: classes.textField }}>
                                <InputLabel htmlFor="component-outlined">Price</InputLabel>
                                <OutlinedInput  required 
                                                id="component-outlined" 
                                                name="price"
                                                value={productPrice} 
                                                onChange={e=>setProductPrice(e.target.value)} 
                                                label="Цена товара" />
                            </FormControl>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions classes={{ root: classes.actionsBox }}>
                    <Mutation mutation={CREATE_PRODUCT}>
                        {mutation => <button className={classes.createButton} onClick={() => {
                            return (
                                mutation({ variables: { name: productName, price: Number.parseFloat(productPrice) }, refetchQueries: [{ query: PRODUCTS_QUERY }] }),
                                handleCreatingSubmit()
                            )
                        }} autoFocus>Подтвердить</button>}
                    </Mutation>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateProduct

