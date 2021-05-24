
import React, { useState, useEffect, useRef } from 'react';
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
    const { fetchTrending, fetchMovies, fetchSeries, fetchSearch } = useGlobalContext();

    const classes = useStyles();
    const [value, setValue] = useState('trending');

    const history = useHistory();
    const currentRef = useRef(null);


    useEffect(() => {
        if (value === 'trending') {
            console.log("=========navigation");
            history.push('/');
            fetchTrending();
        }
        if (value === 'movies') {
            history.push('/movies');
            fetchMovies();
        }
        if (value === 'series') {
            history.push('/series');
            fetchSeries();
        }
        if (value === 'search') {
            history.push('/search')
            fetchSearch();
        };
        checkPage();
        // eslint-disable-next-line
    }, [value, history]);

    const checkPage = () => {
        let navElements = [...currentRef.current.children];
        navElements.map(element => {
            let elementName = element.firstElementChild.lastElementChild.textContent.toLowerCase();
            if (elementName === value) {
                element.classList.add = 'Mui-selected';
            } else {
                element.classList.remove = 'Mui-selected';
            }
        });

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} ref={currentRef}>
            <BottomNavigationAction label="Trending" value="trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction label="Movies" value="movies" icon={<MovieIcon />} />
            <BottomNavigationAction label="Series" value="series" icon={<TvIcon />} />
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}

