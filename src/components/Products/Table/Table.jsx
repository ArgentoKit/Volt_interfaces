import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    id: {
        width: '40px'
    },
    name: {
        width: '100px'
    },
    price: {
        
    }
})

const ProductTable = () => {
    const classes = useStyles()
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell classes={{root: classes.id}}>id</TableCell>
                    <TableCell classes={{root: classes.name}} align="right">Name</TableCell>
                    <TableCell classes={{root: classes.price}} align="right">Price ($)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                
            </TableBody>
        </Table>
    )
}

export default ProductTable