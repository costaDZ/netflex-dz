import React, { useContext, useEffect, useState } from 'react'


const AppContent = React.createContext();

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    // const [location, setLocation] = useState('trending');

    const [trending, setTrending] = useState([]);

    const [movies, setMovies] = useState([]);

    // const [gener, setGener] = useState('action');


    const [currentPage, setCurrentPage] = useState({
        trendingPage: 1,
        moviesPage: 1
    });

    // console.log(currentPage);

    const [numberPages, setNumberPages] = useState(10);


    // // Initializing didMount as false
    // const [didMountes, setDidMountes] = useState(false);


    const fetchTrending = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}&page=${currentPage.trendingPage}`);
        const data = await response.json();
        setTrending(data.results);
        setNumberPages(10);
    }

    const fetchMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage.moviesPage}&with_watch_monetization_types=flatrate`);
        const data = await response.json();
        setMovies(data.results);
        setNumberPages(data.total_pages);
    }

    useEffect(() => {
        console.log('moviesEffect 02');
        fetchMovies();
        setLoading(false);
        // eslint-disable-next-line
    }, [currentPage.moviesPage])



    useEffect(() => {
        fetchTrending();
        setLoading(false);
        // eslint-disable-next-line
    }, [currentPage.trendingPage])



    // useEffect(() => {

    //     fetchMovies();

    //     // eslint-disable-next-line
    // }, [gener])

    return (
        <AppContent.Provider value={
            {
                loading,
                trending,
                currentPage,
                setCurrentPage,
                setNumberPages,
                numberPages,
                movies,
                fetchMovies,
                fetchTrending,
            }
        }>
            { children}
        </AppContent.Provider >
    )
}

export const useGlobalContext = () => {
    return useContext(AppContent);
}

export { AppContent, AppProvider }