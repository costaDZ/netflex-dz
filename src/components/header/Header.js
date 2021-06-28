import React from 'react';
import useStyles from './style';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';

import { useGlobalContext } from '../../context';

import { ReactComponent as ReactLogo } from '../../logo.svg';



export const Header = () => {

    const classes = useStyles();
    const { handleChange } = useGlobalContext();



    return (
        <AppBar position="fixed" className={classes.appbar} >
            <Toolbar className={classes.toolbar}>
                <IconButton variant="h6" className={classes.icon} onClick={() => handleChange(null, '/')}>
                    <Link to='/'>
                        <ReactLogo />
                    </Link>
                </IconButton>
                <Button variant="contained" size="small" color="primary">
                    Sign In
                </Button>
            </Toolbar>
        </AppBar>
    );
}

