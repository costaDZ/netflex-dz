import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
    return {
        card: {
            position: "relative",
            margin: 'auto',
            minHeight: "19em",
            transition: ".3s",
            '&:hover': {
                background: theme.palette.secondary.main,
                color: "white",

            },
        },
        media: {
            height: 300,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "inherit",
        },
        title: {
            fontSize: "1.5em",
            textAlign: "center"
        },
        rating_star: {
            fontSize: "3em",
            color: "#fc0",
        },
        rating_box: {
            position: "absolute",
            top: "0",
            right: "0"
        },
        rating: {
            position: "relative",
            bottom: "55px",
            left: "21px",
            fontWeight: "900",
        },
        actions: {
            position: 'relative',
            display: 'block',
            padding: '8px',
            bottom: '0',
            width: '100%',
            textAlign: 'center',
        },
        detail_btn: {
            width: '80%',
        }
    }
})

export default useStyles;
