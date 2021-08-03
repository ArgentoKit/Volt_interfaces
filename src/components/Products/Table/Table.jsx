import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    id: {
        width: '40px'
    },
    name: {
        width: '150px'
    },
    price: {

    }
})

const ProductTable = ({ products }) => {
    var id = 0
    const classes = useStyles()
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell classes={{ root: classes.id }}>id</TableCell>
                    <TableCell classes={{ root: classes.name }} align="right">Name</TableCell>
                    <TableCell classes={{ root: classes.price }} align="right">Price ($)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map(row => (
                    <TableRow key={row.name}>
                        <TableCell classes={{ root: classes.id }}>{++id}</TableCell>
                        <TableCell classes={{ root: classes.name }} align="right">{row.name}</TableCell>
                        <TableCell classes={{ root: classes.price }} align="right">{row.price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ProductTable

/*

 */