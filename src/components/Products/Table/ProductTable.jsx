import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'
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
    const [open, setOpen] = React.useState(false)
    const [openUpdate, setOpenUpdate] = React.useState(false)
    const [element, setElement] = React.useState('')
    const [prodName, setProdName] = React.useState('')
    const [prodPrice, setProdPrice] = React.useState('')

    const handleDeletingDialog = (id) => {
        setOpen(true)
        setElement(id)
    }
    const handleCloseDeletingDialog = () => {
        setOpen(false)
        setElement(0)
    }
    const handleDeleteConfirm = () => {
        setOpen(false)
    }
    const handleUpdateDialog = (productId, prodName, prodPrice) => {
        setElement(productId)
        setProdName(prodName)
        setProdPrice(prodPrice)
        setOpenUpdate(true)
    }
    const handleCloseUpdateDialog = () => {
        setOpenUpdate(false)
        setElement('')
        setProdName('')
        setProdPrice(0)
    }

    var id = 0
    const classes = useStyles()
    const titles = ['id', 'Name', 'Price']
    return (
        <>
            <ReusableTable titles={titles} items={products} classes={classes}/>
            <UpdateProduct open={openUpdate} element={element} name={prodName} price={prodPrice} handleClose={handleCloseUpdateDialog}/>
            <DeleteCofirm open={open} element={element} handleClose={handleCloseDeletingDialog} handleDeleteConfirm={handleDeleteConfirm} />
        </>
    )
}

export default ProductTable

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