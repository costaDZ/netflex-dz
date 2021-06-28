import React from 'react';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useStyles } from './styles';
import { useGlobalContext } from '../../context';

export const Overlay = () => {

    const classes = useStyles();

    const { setValue } = useGlobalContext();


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
                    <Link to="/trending" className={classes.overlay_btn}
                        onClick={() => {
                            setValue("trending")
                        }}>
                        <Button variant="contained" color="primary">Discover</Button>
                    </Link>
                </div>
            </Container>
        </section >
    );
};


