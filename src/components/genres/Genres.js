import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

import { useGlobalContext } from '../../context';


const useStyles = makeStyles((theme) => {
    return {
        chip: {
            color: "grey",
        },
        avatar: {
            // BackgroundColor: "red",
            color: "green",
        }
    }
})

export const Genres = ({ label }) => {

    // const { setGener } = useGlobalContext();

    // const [chipColor, setChipColor] = useState("grey");
    const classes = useStyles("grey");

    const handleClick = (e) => {

        if (e.target.tagName === "SPAN") {
            console.log(e.target.textContent);
            // setGener(e.target.textContent);
        } else if (e.target.tagName === "DIV") {
            console.log(e.target.nextElementSibling.textContent);
            // setGener(e.target.nextElementSibling.textContent);
        }


    };

    // const handleDelete = (e) => {
    //     // console.info('You clicked the delete icon.');

    // };


    return (
        <Chip
            onClick={(e) => handleClick(e)}
            className={classes.chip}
            avatar={<Avatar>M</Avatar >}
            label={label}
            clickable
        // color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
        >
            Genres
        </Chip>
    );


};
