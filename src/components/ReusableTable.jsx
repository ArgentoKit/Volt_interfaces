import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'

const ReusableTable = ({titles, items, classes}) => {
    console.log(items)
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
                            {console.log(Object.keys(row))}
                            {Object.keys(row).map(element => {
                                if (element === 'id') {
                                    return <TableCell classes={{ root: classes.id }}>{++id}</TableCell>
                                } else if (element !== '__typename') return <TableCell classes={{ root: classes.element }} align="right">{row[element]}</TableCell>
                            })}
                            <TableCell classes={{ root: classes.action }} align="right">
                                <CreateIcon classes={{ root: classes.create }} onClick={() => alert('Вы нажали на изменение объекта')} />
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