import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

import { img_300, unavailable } from '../../config/config';
import useStyles from './style';




export const CardItem = ({
    id,
    title,
    name,
    first_air_date,
    poster_path,
    release_date,
    media_type,
    vote_average,
    kind,
}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card className={classes.card} id={id}>
                {/* {loadingImg ? <Loader /> : } */}

                <CardActionArea >
                    <CardMedia
                        className={classes.media}
                        image={(img_300 + poster_path) || unavailable}
                        title="Contemplative Reptile"

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6" className={classes.title}>
                            {title || name}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="h6">
                            {overview}
                        </Typography> */}
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="body2" component="h6" className={classes.info}>
                                {kind}
                            </Typography>
                            <Typography variant="body2" component="h6" className={classes.info}>
                                {release_date || first_air_date}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>

                <CardActions display="flex" className={classes.actions}>
                    <Button variant="contained" size="small" color="primary" >
                        Details
                    </Button>
                    <Box className={classes.rating_box}>
                        <StarIcon className={classes.rating_star} />
                        <Box className={classes.rating} >{vote_average}</Box>
                    </Box>
                </CardActions>
            </Card>
        </Grid>

    );
};






