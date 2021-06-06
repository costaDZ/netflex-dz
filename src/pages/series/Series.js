import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { CardItem, PaginationPages, Genres, CartLoader } from '../../components';

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

    const { series, loadingCard } = useGlobalContext();
    const classes = useStyles();

    return (
        <>
            <Typography variant="h3" color="primary" className={classes.title}>
                Searies
        </Typography>
            <Genres />

            <Grid container spacing={3} >

                {/* {loadingCard ? <CartLoader /> : series.map(item => <CardItem key={item.id} {...item} kind={"TV-series"} />)} */}

                {loadingCard && <CartLoader />}
                {series.length === 0 && <h2 style={{ margin: "auto", paddingTop: "2em" }}>No result Matches ...</h2>}
                {series &&

                    series.map(item => <CardItem key={item.id} {...item} kind={"TV-series"} />)

                }


            </Grid>
            {  series.length > 0 && <PaginationPages />}
        </>
    );
};






