import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import DeleteCofirm from './DeleteConfirm'
import UpdateProduct from './UpdateProduct';
import ReusableTable from '../../ReusableTable'

const useStyles = makeStyles({
    id: {
        width: '40px'
    },
    name: {
        width: '150px'
    },
    create: {
        width: '25px',
        marginRight: '8px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    delete: {
        width: '25px',
        '&:hover': {
            color: 'red',
            cursor: 'pointer'
        }
    },
    action: {
        width: '150px'
    }
})

const ProductTable = ({ products }) => {
    const [open, setOpen] = useState(false)
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: ''
    })

    const setItemData = (row) => {
        setProduct({
            id: row.id,
            name: row.name,
            price: row.price
        })
        openDialog()
    }
    const openDialog = () => {
        setOpen(true)
    }
    const closeDialog = () => {
        setOpen(false)
    }


    var id = 0
    const classes = useStyles()
    const titles = ['id', 'Name', 'Price']
    return (
        <>
            <ReusableTable titles={titles} items={products} classes={classes} setItemData={setItemData}/>
            <UpdateProduct open={open} handleClose={closeDialog} item={product}/>
            <DeleteCofirm  />
        </>
    )
}

export default ProductTable

//open={} element={} name={} price={} handleClose={}
//open={} element={} handleClose={} handleDeleteConfirm={}
/* 
<Table>
                <TableHead>
                    <TableRow>
                        <TableCell classes={{ root: classes.id }}>id</TableCell>
                        <TableCell classes={{ root: classes.name }} align="right">Name</TableCell>
                        <TableCell classes={{ root: classes.price }} align="right">Price ($)</TableCell>
                        <TableCell classes={{ root: classes.action }} align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(row => (
                        <TableRow classes={{ root: classes.row }} key={row.name}>
                            <TableCell classes={{ root: classes.id }}>{++id}</TableCell>
                            <TableCell classes={{ root: classes.name }} align="right">{row.name}</TableCell>
                            <TableCell classes={{ root: classes.price }} align="right">{row.price}</TableCell>
                            <TableCell classes={{ root: classes.action }} align="right">
                                <CreateIcon classes={{ root: classes.create }} onClick={() => handleUpdateDialog(row.id, row.name, row.price)}/>
                                <HighlightOffIcon classes={{ root: classes.delete }} onClick={() => handleDeletingDialog(row.id)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
*/