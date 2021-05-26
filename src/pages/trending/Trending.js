import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CardItem, PaginationPages } from '../../components';

import { useGlobalContext } from '../../context';
import useStyles from './style';

import { Loading } from '../../components';

export const Trending = () => {

    const { trending } = useGlobalContext();
    const classes = useStyles();


    return (
        <>
            <Typography variant="h3" color="primary" className={classes.title}>
                Trending
        </Typography>
            <Grid container spacing={3} >
                {
                    trending && trending.map(item => <CardItem key={item.id} {...item} kind={"Movie"} />)
                }

            </Grid>
            <PaginationPages />
        </>
    );

};
