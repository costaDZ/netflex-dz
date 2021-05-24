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
            margin: 'auto'
        },
        title: {
            textAlign: "center",
            margin: ".5em 0",
            fontSize: "2em",
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
                <form className={classes.form}>
                    <TextField
                        value={search}
                        className={classes.input}
                        id="Standard"
                        label="Search"
                        color="primary"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <ButtonGroup variant="text" color="default" aria-label="search" >
                        <Button
                            onClick={fetchSearch}
                            variant="contained"
                            color="primary" s
                            tyle={{ marginLeft: '2em' }}>
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
                        // setPage(1)
                    }
                    }
                    textColor="primary"
                >
                    <Tab label="Search Movies" style={{ width: '50%' }} />
                    <Tab label="Search TV-series" style={{ width: '50%' }} />
                </Tabs>
            </ThemeProvider>

            <Typography variant="h3" color="primary" className={classes.title}>
                {type === 0 ? "Movies" : "Series"}
            </Typography>

            {/* <Genres /> */}

            <Grid container spacing={3} >
                {
                    searchMovies?.map(item => <CardItem key={item.id} {...item} kind={"Movie"} />)
                }

            </Grid>
            {searchMovies && < PaginationPages />}
        </section>
    );
};





// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`full-width-tabpanel-${index}`}
//             aria-labelledby={`full-width-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `full-width-tab-${index}`,
//         'aria-controls': `full-width-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.background.paper,
//         width: 500,
//     },
// }));

// export default function FullWidthTabs() {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const handleChangeIndex = (index) => {
//         setValue(index);
//     };

//     return (
//         <div className={classes.root}>
//             <AppBar position="static" color="default">
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     indicatorColor="primary"
//                     textColor="primary"
//                     variant="fullWidth"
//                     aria-label="full width tabs example"
//                 >
//                     <Tab label="Item One" {...a11yProps(0)} />
//                     <Tab label="Item Two" {...a11yProps(1)} />
//                 </Tabs>
//             </AppBar>
//             <SwipeableViews
//                 axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                 index={value}
//                 onChangeIndex={handleChangeIndex}
//             >
//                 <TabPanel value={value} index={0} dir={theme.direction}>
//                     Item One
//         </TabPanel>
//                 <TabPanel value={value} index={1} dir={theme.direction}>
//                     Item Two
//         </TabPanel>
//             </SwipeableViews>
//         </div>
//     );
// }