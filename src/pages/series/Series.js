import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { CardItem, PaginationPages, Genres } from '../../components';

import { useGlobalContext } from '../../context';




const useStyles = makeStyles((theme) => {
    return {
        title: {
            textAlign: "center",
            margin: ".5em 0",
            fontSize: "2em",
        }
    }
});


export const Series = () => {

    const { series } = useGlobalContext();
    const classes = useStyles();

    console.log(series);

    return (
        <>
            <Typography variant="h3" color="primary" className={classes.title}>
                Searies
        </Typography>
            <Genres />

            <Grid container spacing={3} >
                {
                    series && series.map(item => <CardItem key={item.id} {...item} kind={"TV-series"} />)
                }
            </Grid>
            <PaginationPages />
        </>
    );
};






