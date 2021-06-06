import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CardItem, PaginationPages, CartLoader } from '../../components';

import { useGlobalContext } from '../../context';
import useStyles from './style';

export const Trending = () => {

    const { trending, loadingCard } = useGlobalContext();
    const classes = useStyles();

    return (
        <>
            <Typography variant="h3" color="primary" className={classes.title}>
                Trending
        </Typography>
            <Grid container spacing={3} >

                {loadingCard && <CartLoader />}
                {trending && trending.map(item => <CardItem key={item.id} {...item} kind={"Movie"} />)}

            </Grid>
            <PaginationPages />
        </>
    );

};
