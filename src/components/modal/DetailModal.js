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
        [theme.breakpoints.down('sm')]: {
            lineHeight: 1,
            padding: "16px 10px 24px",
        }
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            height: "9em",
            width: "100%"
        }
    },
    p: {
        [theme.breakpoints.down('sm')]: {
            lineHeight: 2,
            fontSize: ".8em",
        }
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "1em",
            paddingBottom: ".5em",
            color: theme.palette.primary.main
        }
    },
    subTitle: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },

}));


export const DetailsModal = () => {
    const classes = useStyles();

    const { open, handleOpen, handleClose, modalContent } = useGlobalContext();

    const { title, type, name, overvew, image } = modalContent;

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
                        <h2 id="transition-modal-title" color="primary" className={classes.title}>{title || name}</h2>
                        <h3 className={classes.subTitle}>({type})</h3>
                        <img src={(img_300 + image) || unavailable} alt={title} className={classes.image} />
                        <p id="transition-modal-description" className={classes.p}>{overvew}</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
