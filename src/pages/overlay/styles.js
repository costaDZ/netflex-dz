

import { makeStyles } from '@material-ui/core';



export const useStyles = makeStyles((theme) => {
    return {
        overlayContainer: {
            position: "relative",
            top: "0.2em",

        },
        overlay: {
            backgroundImage: "linear-gradient(180deg,rgb(109 137 127 / 0%) 0%,#000000 100%) ,url('https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2019/09/movie-02.jpg')",
            height: '85vh',
            transition: 'cubic-bezier(0.25, 0.1, 0.85, 0.9) .6s',
            position: "absolute",
            top: "0",
            width: "100%",
            opacity: 0,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

        },
        overlay2: {
            backgroundImage: "linear-gradient(180deg,rgb(109 137 127 / 0%) 0%,#000000 100%) ,url(https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2019/12/theater-02.jpg)",
            height: '85vh',
            //   opacity: 0,
            transition: 'cubic-bezier(0.25, 0.1, 0.85, 0.9) .6s',
            position: "absolute",
            top: "0",
            width: "100%",
            opacity: 0,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

        },

        opacityHide: {
            opacity: 0,
        },
        overlay3: {
            backgroundImage: "linear-gradient(180deg,rgb(109 137 127 / 0%) 0%,#000000 100%) ,url(https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2019/09/movie-05.jpg)",
            height: '85vh',
            // opacity: 0,
            transition: 'cubic-bezier(0.25, 0.1, 0.85, 0.9) .6s',
            position: "absolute",
            top: "0",
            width: "100%",
            opacity: 0,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
        opacityShow: {
            opacity: 1,
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
            padding: ".5em 0",
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

