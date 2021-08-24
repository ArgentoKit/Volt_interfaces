import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CreateIcon from '@material-ui/icons/Create';
import React, { useState } from 'react'
import DeleteCofirm from './DeleteConfirm'
import UpdateProduct from './UpdateProduct';

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
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: ''
    })
    
    const openDeleteConfirm = (prodId) => {
        setProduct({
            ...product,
            id: prodId
        })
        setOpenDelete(true)
    }
    const openUpdateDialog = (row) => {
        setProduct({
            ...product,
            id: row.id,
            name: row.name,
            price: row.price
        })
        setOpenUpdate(true)
    }
    const handleClose = () => {
        setOpenDelete(false)
        setOpenUpdate(false)
    }

    var id = 0
    const classes = useStyles()
    return (
        <>
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
                                <CreateIcon classes={{ root: classes.create }} onClick={() => openUpdateDialog(row)}/>
                                <HighlightOffIcon classes={{ root: classes.delete }} onClick={() => openDeleteConfirm(row.id)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <UpdateProduct open={openUpdate} handleClose={handleClose} item={product}/>
            <DeleteCofirm open={openDelete} id={product.id} handleClose={handleClose}/>
        </>
    )
}

export default ProductTable
