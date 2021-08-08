import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'
import DeleteCofirm from '../../DeleteConfirm';

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
    const [open, setOpen] = React.useState(false);
    const [element, setElement] = React.useState('')

    const handleDialogOpen = (id) => {
        setOpen(true)
        setElement(id)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleDeleteConfirm = () => {
        setOpen(false)
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
                                <CreateIcon classes={{ root: classes.create }} />
                                <HighlightOffIcon classes={{ root: classes.delete }} onClick={() => handleDialogOpen(row.id)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <DeleteCofirm open={open} element={element} handleClose={handleClose} handleDeleteConfirm={handleDeleteConfirm} />
        </>
    )
}

export default ProductTable
