import React from 'react';
import { Box, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import { useGlobalContext } from '../../context';
import { useLocation } from 'react-router';
//import { Button } from 'react-scroll';


const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#e50914'
        },
    }
});

const useStyles = makeStyles((theme) => {
    return {
        pagination: {
            color: "white",
            justifyContent: "center",
            margin: theme.spacing(3, 0)
        }
    }
})



export const PaginationPages = () => {

    const { changePage, numberPages } = useGlobalContext();

    let location = useLocation();
    let currentLocation = location.pathname;

    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}>
            <Box display="flex" justifyContent="center" className={classes.pagination}>
                {numberPages > 1 &&
                    <Pagination count={numberPages} color="primary" onClick={(e) => changePage(e, currentLocation)} />
                }
            </Box>


        </ThemeProvider>
    );
};


// onClick = {(e) => changePage(e)}
