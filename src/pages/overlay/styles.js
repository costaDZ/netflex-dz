

import { makeStyles } from '@material-ui/core';



export const useStyles = makeStyles((theme) => {
    return {
        overlay: {
            backgroundImage: "linear-gradient(180deg,rgb(109 137 127 / 0%) 0%,#000000 100%) ,url('https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2019/09/movie-02.jpg')",
            height: '85vh',
        },
        container: {
            minHeight: "100%",
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down('xs')]: {
                textAlign: "center",
                padding: "0 0",
            }
        },
        title_info: {
            fontFamily: "'Montserrat', Helvetica, Arial, Lucida, sans-serif",
            width: "80%",
            height: "50%",
            letterSpacing: "3px",
            lineHeight: 5,
            [theme.breakpoints.down('md')]: {
                width: "100%",
            }
        },
        mainTitle: {
            fontWeight: "800",
            fontSize: "3em",
            lineHeight: " 1.2em",
            padding: "1em 0",
            [theme.breakpoints.down('md')]: {
                fontSize: "2em"
            },
            [theme.breakpoints.down('md')]: {
                fontSize: "1.5em",
            }
        },
        smallP: {
            lineHeight: "2",
            fontSize: ".8em",
            [theme.breakpoints.down('md')]: {
                fontSize: ".8em"
            }
        },
        overlay_btn: {
            textDecoration: "none",
        }
    }
})