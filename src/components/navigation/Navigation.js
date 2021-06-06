
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../context';


const useStyles = makeStyles({
    root: {
        width: "100vw",
        position: "fixed",
        bottom: 0,
    },
});

export const Navigation = () => {
    const { value, handleChange, setHistory } = useGlobalContext();

    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        setHistory(history);
        // eslint-disable-next-line
    }, []);


    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
            <BottomNavigationAction label="Trending" value="trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction label="Movies" value="movies" icon={<MovieIcon />} />
            <BottomNavigationAction label="Series" value="series" icon={<TvIcon />} />
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}

