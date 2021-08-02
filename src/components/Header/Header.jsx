import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Button, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    appbar: {
        backgroundColor: '#009688'
    },
    toolbar: {
        margin: '0 100px',
        color: 'rgb(224, 224, 224)'
    },
    logo: {
        marginRight: '30px'
    },
    button: {
        margin: '3px 12px 0 12px',
        color: '#fff'
    }
})

const Header = () => {
    const classes = useStyles()
    return (
        <>
        <AppBar classes={{root: classes.appbar}} position="static" color="default">
            <Toolbar classes={{root: classes.toolbar}}>
                <Typography classes={{root: classes.logo}} variant="h6" color="inherit">
                    Invoice App
                </Typography>
                <Button classes={{root: classes.button}}>Invoices</Button>
                <Button classes={{root: classes.button}}>Products</Button>
                <Button classes={{root: classes.button}}>Customers</Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Header