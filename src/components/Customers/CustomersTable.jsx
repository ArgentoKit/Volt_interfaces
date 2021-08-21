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

const CustomersTable = ({ customers }) => {
    var id = 0
    const classes = useStyles()
    const titles = ['id', 'Name', 'Address', 'Phone']
    return (
        <ReusableTable titles={titles} items={customers} classes={classes}/>
    )
}

export default CustomersTable