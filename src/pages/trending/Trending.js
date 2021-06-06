import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CardItem, PaginationPages } from '../../components';

import { useGlobalContext } from '../../context';
import useStyles from './style';

import { CartLoader } from '../../components';

export const Trending = () => {

    const { trending, loadingCard } = useGlobalContext();

    const classes = useStyles();




    return (
        <>
            <Typography variant="h3" color="primary" className={classes.title}>
                Trending
        </Typography>
            <Grid container spacing={3} >

                {/* {loadingCard ? <CartLoader /> : trending.map(item => <CardItem key={item.id} {...item} kind={"Movie"} />)} */}

                {loadingCard && <CartLoader />}

                {trending && trending.map(item => <CardItem key={item.id} {...item} kind={"Movie"} />)}
            </Grid>
            <PaginationPages />
        </>
    );

};
