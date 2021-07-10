import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useStyles } from './styles';
import { useGlobalContext } from '../../context';

import Fade from 'react-reveal/Fade';
import { useEffect } from 'react';


export const Overlay = () => {

    const classes = useStyles();
    const { setValue } = useGlobalContext();

    const [overlay, setOverlay] = useState(0);


    useEffect(() => {
        let interval = setInterval(() => {
            if (overlay === 2) {
                setOverlay(0);
            } else {
                setOverlay((overlay) => overlay += 1);
            }
            console.log(overlay);
        }, 3000);

        return () => clearInterval(interval)
    }, [overlay])

    //   className = { overlay === 0 ? classes.overlay : overlay === 1 ? classes.overlay2 : classes.overlay3
    return (
        <section className={classes.overlayContainer} >
            <section className={`${classes.overlay} ${overlay === 0 ? classes.opacityShow : null} `}>
                <Container className={classes.container}>
                    <div className={classes.title_info}>

                        <Typography variant="h1" className={classes.mainTitle}>
                            THE BEST MOVIES EVER
                        </Typography>

                        <Typography variant="body1" component="p" className={classes.smallP}>
                            Open you show right now with the latest
                            movies, series, documentries and more ...
                        </Typography>

                        <Link to="/trending" className={classes.overlay_btn}
                            onClick={() => setValue("trending")}>
                            <Button variant="contained" color="primary">Discover</Button>
                        </Link>
                    </div>
                </Container>
            </section >

            <section className={`${classes.overlay2} ${overlay === 1 ? classes.opacityShow : null}`}>
                <Container className={classes.container}>
                    <div className={classes.title_info}>

                        <Typography variant="h1" className={classes.mainTitle}>
                            Pre Order Refreshments
                        </Typography>

                        <Typography variant="body1" component="p" className={classes.smallP}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </Typography>
                        <Link to="/trending" className={classes.overlay_btn}
                            onClick={() => setValue("trending")}>
                            <Button variant="contained" color="primary">
                                Discover</Button>
                        </Link>
                    </div>
                </Container>
            </section >

            <section className={`${classes.overlay3} ${overlay === 2 ? classes.opacityShow : null}`}>
                <Container className={classes.container}>
                    <div className={classes.title_info}>

                        <Typography variant="h1" className={classes.mainTitle}>
                            MOVIE PASS CLUB
                        </Typography>

                        <Typography variant="body1" component="p" className={classes.smallP}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </Typography>
                        <Link to="/trending" className={classes.overlay_btn}
                            onClick={() => setValue("trending")}>
                            <Button variant="contained" color="primary">
                                Discover</Button>
                        </Link>
                    </div>
                </Container>
            </section >

        </section >
    );
};



