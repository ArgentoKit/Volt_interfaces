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

const InvoicesTable = ({ invoices }) => {
    var id = 0
    const classes = useStyles()
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell classes={{ root: classes.id }}>id</TableCell>
                    <TableCell classes={{ root: classes.name }} align="right">Name</TableCell>
                    <TableCell classes={{ root: classes.discount }} align="right">Discount</TableCell>
                    <TableCell classes={{ root: classes.total}} align="right">Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {invoices.map(row => (
                    <TableRow key={row.name}>
                        <TableCell classes={{ root: classes.id }}>{++id}</TableCell>
                        <TableCell classes={{ root: classes.name }} align="right">{row.customer.name}</TableCell>
                        <TableCell classes={{ root: classes.discount }} align="right">{row.discount}</TableCell>
                        <TableCell classes={{ root: classes.total }} align="right">{row.total}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default InvoicesTable