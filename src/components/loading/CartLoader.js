import React from 'react';
import { Grid } from '@material-ui/core';

import './carLoader.css';

export const CartLoader = () => {

    return (
        [...Array(20)].map((item, i) =>
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <div className="cart-loader">
                    <div className="loader_img1">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20"
                                fill="none" strokeWidth="2" strokeMiterlimit="10" />
                        </svg>
                    </div>
                </div>
            </Grid>)
    )

};

