import React, { useContext, useEffect, useState, useReducer, useLayoutEffect } from 'react'
import reducer from './reducer';



const AppContent = React.createContext();


const initialState = {
    loading: true,
    trending: [],
    movies: [],
    series: [],
    geners: [],
    searchMovies: [],
    selectedGeners: [],
    genresIds: [],
    numberPages: 500,
    trendingPage: 1,
    moviesPage: 1,
    seriesPage: 1,
    searchPage: 1
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [type, setType] = useState(0);
    const [search, setSearch] = useState('');

    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const [loadingCard, setLoadingCard] = useState(true);


    const [history, setHistory] = useState(null);
    const [value, setValue] = useState('/');


    const fetchTrending = async () => {
        const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}&page=${state.trendingPage}`;
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'ADD_TRENDING', payload: data.results });
    }

    const fetchMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${state.moviesPage}&with_genres=${state.genresIds}`;

        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'ADD_MOVIES', payload: data });
    }

    const fetchSeries = async () => {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${state.seriesPage}&with_genres=${state.genresIds}`;
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'ADD_SERIES', payload: data });
    }

    const fetchGeners = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`);
        const { genres } = await response.json();
        dispatch({ type: 'ADD_GENERS', payload: genres });
    }

    const fetchSearch = async (e) => {
        if (e) {
            e.preventDefault();
        }
        let url = `https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${search}&page=${state.searchPage}&include_adult=false`;

        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'SET_MOVIES_SEARCH', payload: data });
    }

    useLayoutEffect(() => {
        setLoadingCard(true);

        setTimeout(() => {
            setLoadingCard(false);
        }, 1000);
    }, [state.trending, state.movies, state.series, state.searchMovies])


    useEffect(() => {
        fetchSearch();
        // eslint-disable-next-line
    }, [state.searchPage, type]);

    useEffect(() => {
        fetchGeners();
        fetchTrending();
        // eslint-disable-next-line
    }, [state.trendingPage]);

    useEffect(() => {
        fetchSeries();
        // eslint-disable-next-line
    }, [state.seriesPage, state.genresIds]);

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [state.moviesPage, state.genresIds])

    useEffect(() => {
        setLoadingCard(true);

        if (history) {
            if (value === 'trending') {
                history.push('/trending');
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
        }
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, [value]);



    const addGeners = (id) => {
        let generesTarget = state.geners.find(i => i.id === id);
        dispatch({ type: 'SET_GENERS', payload: generesTarget });
        dispatch({ type: 'ADD_GENRES_IDS', payload: generesTarget });
    };

    const handleDelete = (id) => {
        let generesTarget = state.selectedGeners.find(i => i.id === id);
        console.log(generesTarget);
        dispatch({ type: 'DELETE_GENERS', payload: generesTarget });
        dispatch({ type: 'REMOVE_GENRES_IDS', payload: generesTarget });
    }

    const changeCurrentPage = (num, section) => {
        if (section === 'trending') {
            dispatch({ type: 'CHANGE_TRENDING_PAGE', payload: num })
        } else if (section === 'movies') {
            dispatch({ type: 'CHANGE_MOVIES_PAGE', payload: num })
        } else if (section === 'series') {
            dispatch({ type: 'CHANGE_SERIES_PAGE', payload: num })
        } else if (section === 'search') {
            dispatch({ type: 'CHANGE_SEARCH_PAGE', payload: num })
        }
        window.scrollTo(0, 0);
    }

    const nextPage = (section) => {
        if (section === 'trending') {
            dispatch({ type: 'TRENDING_NEXT_PAGE', payload: Number(state.trendingPage) });
        } else if (section === 'movies') {
            dispatch({ type: 'MOVIES_NEXT_PAGE', payload: Number(state.moviesPage) })
        } else if (section === 'series') {
            dispatch({ type: 'SERIES_NEXT_PAGE', payload: Number(state.seriesPage) })
        } else if (section === 'search') {
            dispatch({ type: 'SEARCH_NEXT_PAGE', payload: Number(state.searchPage) })
        }
        window.scrollTo(0, 0);
    }

    const prevPage = (section) => {
        if (section === 'trending') {
            dispatch({ type: 'TRENDING_PREV_PAGE', payload: Number(state.trendingPage) });
        } else if (section === 'movies') {
            dispatch({ type: 'MOVIES_PREV_PAGE', payload: Number(state.moviesPage) })
        } else if (section === 'series') {
            dispatch({ type: 'SERIES_PREV_PAGE', payload: Number(state.seriesPage) })
        } else if (section === 'search') {
            dispatch({ type: 'SEARCH_PREV_PAGE', payload: Number(state.searchPage) })
        }
        window.scrollTo(0, 0);
    }

    const changePage = (e, currentLocation) => {

        let itemNumber = Number(e.target.textContent);

        console.log(itemNumber);

        if (itemNumber) {
            if (currentLocation === "trending") {
                changeCurrentPage(itemNumber, "trending");
            } else if (currentLocation === "/movies") {
                changeCurrentPage(itemNumber, "movies");
            } else if (currentLocation === "/series") {
                changeCurrentPage(itemNumber, "series");
            } else if (currentLocation === "/search") {
                changeCurrentPage(itemNumber, "search");
            }
        }

        if (e.target.parentElement.tagName === "BUTTON"
            || (e.target.parentElement.tagName === "svg")) {

            let ariaLabel = e.target.parentElement.ariaLabel;

            if (ariaLabel === "Go to previous page" || (e.target.parentElement.tagName === "svg")) {
                if (currentLocation === "/") {
                    prevPage("trending");
                } else if (currentLocation === "/movies") {
                    prevPage("movies");
                } else if (currentLocation === "/series") {
                    prevPage("series");
                } else if (currentLocation === "/search") {
                    prevPage("search");
                }

            } else if (ariaLabel === "Go to next page" || ariaLabel === null) {
                if (currentLocation === "/") {
                    nextPage("trending");
                } else if (currentLocation === "/movies" || ariaLabel === null) {
                    nextPage("movies");
                } else if (currentLocation === "/series" || ariaLabel === null) {
                    nextPage("series");
                } else if (currentLocation === "/search" || ariaLabel === null) {
                    nextPage("search");
                }
            }
        }
    }

    const handleOpen = (title, type, overview, image) => {
        setModalContent({
            title: title,
            type: type,
            overvew: overview,
            image: image,
        })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {

        setValue(newValue);

    };



    return (
        <AppContent.Provider value={
            {
                ...state,
                loadingCard,
                fetchMovies,
                fetchTrending,
                changePage,
                addGeners,
                handleDelete,
                fetchSeries,
                type,
                setType,
                search,
                setSearch,
                fetchSearch,
                open,
                setOpen,
                handleOpen,
                handleClose,
                modalContent,
                value,
                handleChange,
                setHistory,
                setValue,
            }
        }>
            {children}
        </AppContent.Provider >
    )
}

export const useGlobalContext = () => {
    return useContext(AppContent);
}

export { AppContent, AppProvider }