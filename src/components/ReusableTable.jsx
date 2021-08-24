import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'

const ReusableTable = ({titles, items, classes, setItemData}) => {
    var id = 0
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        { titles.map(element => {
                            if (element === 'id') {
                                return <TableCell classes={{ root: classes.id }} key={element}>id</TableCell>
                            } else return <TableCell classes={{ root: classes.element }} key={element} align="right">{element}</TableCell>
                        }) }
                        <TableCell classes={{ root: classes.action }} align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(row => (
                        <TableRow classes={{ root: classes.row }} key={row.name}>
                            {Object.keys(row).map(element => {
                                if (element === 'id') {
                                    return <TableCell classes={{ root: classes.id }} key={row.id}>{++id}</TableCell>
                                } else if ((element !== '__typename') 
                                        && (element !== 'customer_id') 
                                        && (element !== 'customer')) {
                                            return <TableCell classes={{ root: classes.element }} align="right" key={row.id}>{row[element]}</TableCell>
                                } else if (element === 'customer_id') return <TableCell classes={{ root: classes.name }} align="right" key={row.id}>{row.customer.name}</TableCell>
                            })}
                            <TableCell classes={{ root: classes.action }} align="right">
                                <CreateIcon classes={{ root: classes.create }} onClick={() => {
                                    setItemData(row)
                                }} />
                                <HighlightOffIcon classes={{ root: classes.delete }} onClick={() => alert('Вы нажали на удаление объекта')} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default ReusableTable