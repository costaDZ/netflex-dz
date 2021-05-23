import React from 'react';
import { makeStyles } from '@material-ui/core';

import './loader.css';

const useStyles = makeStyles((theme) => {
    return {

    }
})

export const Loading = () => {
    const classes = useStyles();

    return (
        <div className="showbox">
            <div className="loader_img">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20"
                        fill="none" strokeWidth="4" strokeMiterlimit="10" />
                </svg>
            </div>
        </div>
    );
};
