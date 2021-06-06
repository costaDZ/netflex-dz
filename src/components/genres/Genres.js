import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

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
        chip: {
            color: "grey",
        },
        Completchip: {
            color: "white",
        },
        avatar: {
            color: "green",
        }
    }
})

export const Genres = () => {

    const { geners, selectedGeners, addGeners, handleDelete } = useGlobalContext();

    const classes = useStyles();


    return (

        <div className={classes.root}>
            {
                selectedGeners && selectedGeners.map(g => <Chip
                    key={g.id}
                    // onClick={(e) => addGeners(e)}
                    className={classes.Completchip}
                    avatar={<Avatar>{g.name[0]}</Avatar >}
                    label={g.name}
                    clickable
                    color="primary"
                    onDelete={() => handleDelete(g.id)}
                // deleteIcon={<DoneIcon />}
                >
                </Chip >)
            }

            {
                geners && geners.map(g => <Chip
                    key={g.id}
                    onClick={() => addGeners(g.id)}
                    className={classes.chip}
                    avatar={<Avatar>{g.name[0]}</Avatar >}
                    label={g.name}
                    clickable
                // color="primary"
                //onDelete={handleDelete}
                //deleteIcon={<DoneIcon />}
                >
                </Chip >)
            }


        </div>

    );


};
