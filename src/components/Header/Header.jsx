import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss'

const useStyles = makeStyles({
    appbar: {
        backgroundColor: '#009688'
    },
    toolbar: {
        margin: '0 100px',
        color: 'rgb(224, 224, 224)'
    },
    logo: {
        marginRight: '30px',
        color: '#E8E8E8',
    },
    button: {
        margin: '3px 12px 0 12px',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#009688',
            color: "#FFBC40",
        }
    },
})

const Header = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar classes={{ root: classes.appbar }} position="static" color="default">
                <Toolbar classes={{ root: classes.toolbar }}>
                    <NavLink exact to='/' className={style.link}>
                        <Typography classes={{ root: classes.logo }} variant="h6" color="inherit">
                            Invoice App
                        </Typography>
                    </NavLink>
                    <NavLink to='/invoices' className={style.link}><Button classes={{ root: classes.button }}>Invoices</Button></NavLink>
                    <NavLink to='/products' className={style.link}><Button classes={{ root: classes.button }}>Products</Button></NavLink>
                    <NavLink to='/customers' className={style.link}><Button classes={{ root: classes.button }}>Customers</Button></NavLink>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header