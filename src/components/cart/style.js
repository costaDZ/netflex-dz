import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
    return {
        card: {
            margin: 'auto',
            minHeight: "3em",
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
            position: "relative",
        },
        rating: {
            position: "absolute",
            top: "22px",
            right: "31%",
            fontWeight: "700",
        },
        actions: {
            justifyContent: "space-between",
            // height: "5em",
        },
    }
})

export default useStyles;
