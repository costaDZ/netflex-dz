import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { CardItem, PaginationPages, Genres } from '../../components';

import { useGlobalContext } from '../../context';




const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: theme.spacing(3, 0),
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        title: {
            textAlign: "center",
            margin: ".5em 0",
            fontSize: "2em",
        }
    }
});


export const Movies = () => {

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);


    const { movies } = useGlobalContext();
    const classes = useStyles();


    const fetchGeners = async () => {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=00a71e34653dd453ebcaa5248790a703&language=en-US');
        const { genres } = await response.json();

        console.log(genres);
        setGenres(genres)
    }

    useEffect(() => {
        fetchGeners();

        console.log(genres);

        return () => {
            setGenres([]);
        }
    }, []);



    return (
        <>
            <Typography variant="h3" color="primary" className={classes.title}>
                Movies
        </Typography>


            <div className={classes.root}>
                {
                    genres.map(g => <Genres
                        key={g.id}
                        label={g.name}
                        setGenres={setGenres}
                        setSelectedGenres={setSelectedGenres}
                    />)
                }
            </div>

            <Grid container spacing={3} >
                {
                    movies.map(item => <CardItem key={item.id} {...item} />)
                }

            </Grid>
            <PaginationPages />
        </>
    );
};






