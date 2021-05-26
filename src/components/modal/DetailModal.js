import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useGlobalContext } from '../../context';

import { img_300, unavailable } from '../../config/config';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '80%',
        textAlign: "center",
        lineHeight: 2,
        color: 'white',
        backgroundColor: theme.palette.secondary.main,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    // image: {
    //     'media'
    // }
}));


export const DetailsModal = () => {
    const classes = useStyles();

    const { open, handleOpen, handleClose, modalContent } = useGlobalContext();

    const { title, type, overvew, image } = modalContent;

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                open
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title" color="primary">{title}</h2>
                        <h3>({type})</h3>
                        <img src={(img_300 + image) || unavailable} alt={title} className={classes.image} />
                        <p id="transition-modal-description">{overvew}</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
