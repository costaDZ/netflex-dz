import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
    console.log(theme);
    return {
        appbar: {
            background: 'white',
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
    }
})

export default useStyles;
