import React, { useEffect, useRef, useState } from 'react';
import { Box, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import { useGlobalContext } from '../../context';
import { useLocation } from 'react-router';


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

    const { setCurrentPage, numberPages, setNumberPages, currentPage } = useGlobalContext();




    const classes = useStyles();
    let location = useLocation();
    let currentLocation = location.pathname;


    const changePage = (e) => {
        if (e.target.textContent) {
            if (currentLocation === "/") {
                setCurrentPage({
                    trendingPage: e.target.textContent,
                    moviesPage: 1
                });

                window.scrollTo(0, 0);
                setNumberPages(10);
            } else if (currentLocation === "/movies") {
                setCurrentPage({
                    trendingPage: 1,
                    moviesPage: e.target.textContent
                });
                window.scrollTo(0, 0);
            }
        }

        if (e.target.parentElement.tagName === "BUTTON") {
            let ariaLabel = e.target.parentElement.ariaLabel;

            if (ariaLabel === "Go to previous page") {
                if (currentLocation === "/") {
                    setCurrentPage({
                        trendingPage: currentPage.trendingPage - 1,
                        moviesPage: 1
                    });
                    window.scrollTo(0, 0);
                } else if (currentLocation === "/movies") {
                    setCurrentPage({
                        trendingPage: 1,
                        moviesPage: currentPage.moviesPage - 1
                    });
                    window.scrollTo(0, 0);
                }

            } else if (ariaLabel === "Go to next page") {

                if (currentLocation === "/") {
                    setCurrentPage({
                        trendingPage: currentPage.trendingPage + 1,
                        moviesPage: 1
                    });
                    window.scrollTo(0, 0);
                } else if (currentLocation === "/movies") {
                    setCurrentPage({
                        trendingPage: 1,
                        moviesPage: currentPage.moviesPage + 1,
                    });
                    window.scrollTo(0, 0);
                }
            }
        }
    }


    return (
        <ThemeProvider theme={darkTheme}>
            <Box display="flex" justifyContent="center" className={classes.pagination}>
                {numberPages > 1 &&
                    <Pagination count={numberPages} color="primary" onClick={(e) => changePage(e)} />
                }
            </Box>
        </ThemeProvider>
    );
};


// onClick = {(e) => changePage(e)}
