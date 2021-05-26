import React, { useState } from 'react';
import { Box, FormControl, makeStyles } from '@material-ui/core';
import { Grid, Typography, FormHelperText, FormLabel } from '@material-ui/core';
import { CardItem, PaginationPages, Genres } from '../../components';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider, Button, ButtonGroup } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useGlobalContext } from '../../context';


// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';




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
        form: {
            textAlign: "center",
            paddingBottom: "4em",
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        input: {
            width: "60%",
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: "80%",
                padding: '1em 0',
            }
        },
        title: {
            textAlign: "center",
            margin: ".5em 0",
            fontSize: "2em",
        },
        groupBtn: {
            justifyContent: 'center',
        },
        tabTitle: {
            [theme.breakpoints.down('sm')]: {
                fontSize: ".6em"
            }
        },
        noResult: {
            textAlign: 'center',
            height: '45vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
});


export const Search = () => {

    // const [page, setPage] = useState(0);

    const { type, setType, setSearch, search, fetchSearch, searchMovies } = useGlobalContext();
    const classes = useStyles();

    return (
        <section>
            <Typography variant="h3" color="primary" className={classes.title}>
                Search
        </Typography>
            {/* <Genres /> */}
            <ThemeProvider theme={darkTheme}>
                <form className={classes.form} onSubmit={(e) => fetchSearch(e)}>
                    <TextField
                        value={search}
                        className={classes.input}
                        required={true}
                        id="Standard"
                        label="Search"
                        color="primary"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <ButtonGroup variant="text" color="default" aria-label="search" className={classes.groupBtn}>
                        <Button
                            // onClick={fetchSearch}
                            variant="contained"
                            color="primary">
                            <SearchIcon /> Search
                    </Button>
                    </ButtonGroup>
                </form>

                <Tabs
                    value={type}
                    indicatorColor="primary"
                    centered
                    onChange={(e, newValue) => {
                        setType(newValue);
                    }
                    }
                    textColor="primary"
                >
                    <Tab label="Search Movies" style={{ width: '50%' }} className={classes.tabTitle} />
                    <Tab label="Search TV-series" style={{ width: '50%' }} className={classes.tabTitle} />
                </Tabs>
            </ThemeProvider>

            <Typography variant="h3" color="primary" className={classes.title}>
                {type === 0 ? "Movies" : "Series"}
            </Typography>

            {!searchMovies ?
                <h2 className={classes.noResult}>No Result Found Yet ...</h2> :
                <>
                    <Grid container spacing={3} >
                        {
                            searchMovies?.map(item => <CardItem key={item.id} {...item} kind={"Movie"} />)
                        }
                    </Grid>
                    < PaginationPages />
                </>
            }

        </section>
    );
};

