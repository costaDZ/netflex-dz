import React from 'react';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';


export const Overlay = () => {

    const classes = useStyles();

    return (
        <section className={classes.overlay}>
            <Container className={classes.container}>
                <div className={classes.title_info}>
                    <h2 className={classes.mainTitle}>
                        DISCOVER THE BEST MOVIES EVER
                    </h2>
                    <p className={classes.smallP}>
                        Open you show right now with the latest
                        movies, series, documentries and more ...
                    </p>
                    <Button variant="contained" color="primary">Discover</Button>
                </div>
            </Container>
        </section >
    );
};


