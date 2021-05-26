import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
    return {
        appbar: {
            backgroundColor: 'white',
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: 'white',
        },
    }
})

export default useStyles;
