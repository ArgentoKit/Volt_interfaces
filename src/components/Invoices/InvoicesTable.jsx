import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import ReusableTable from '../ReusableTable'

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
})

const InvoicesTable = ({ invoices }) => {
    console.log(Object.keys(invoices[0]))
    var id = 0
    const classes = useStyles()
    const titles = ['id', 'Name', 'Discount', 'Total']
    return (
        <ReusableTable titles={titles} items={invoices} classes={classes}/>
    )
}

export default InvoicesTable