//import { useReset } from './hooks/useReset';



const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TRENDING':
            console.log("1 ====> ADD_TRENDING");

            return {
                ...state,
                trending: action.payload,
                loading: false,
                numberPages: 500,
                moviesPage: 1,
                seriesPage: 1,
                searchPage: 1
            }
        case 'ADD_MOVIES':
            return {
                ...state,
                movies: action.payload.results,
                loading: false,
                numberPages: action.payload.total_pages,
                trendingPage: 1,
                seriesPage: 1,
                searchPage: 1
            }
        case 'ADD_SERIES':
            return {
                ...state,
                series: action.payload.results,
                loading: false,
                numberPages: action.payload.total_pages,
                trendingPage: 1,
                moviesPage: 1,
            }
        case 'SET_MOVIES_SEARCH':
            return {
                ...state,
                searchMovies: action.payload.results,
                numberPages: action.payload.total_pages,
            }
        case 'ADD_GENERS':
            return {
                ...state,
                geners: action.payload,
            }
        case 'SET_GENERS':
            return {
                ...state,
                geners: state.geners.filter(i => i.id !== action.payload.id),
                selectedGeners: [...state.selectedGeners, action.payload],
            }
        case 'DELETE_GENERS':
            return {
                ...state,
                selectedGeners: state.selectedGeners.filter(i => i.id !== action.payload.id),
                geners: [...state.geners, action.payload],
            }
        case 'ADD_GENRES_IDS':
            return {
                ...state,
                genresIds: [...state.genresIds, action.payload.id],
                moviesPage: 1,
            }
        case 'REMOVE_GENRES_IDS':
            return {
                ...state,
                genresIds: state.genresIds.filter(i => i !== action.payload.id),
                moviesPage: 1,
            }
        case 'CHANGE_TRENDING_PAGE':
            return {
                ...state,
                trendingPage: action.payload,
            }
        case 'CHANGE_MOVIES_PAGE':
            return {
                ...state,
                moviesPage: action.payload,
            }
        case 'CHANGE_SERIES_PAGE':
            return {
                ...state,
                seriesPage: action.payload,
            }
        case 'CHANGE_SEARCH_PAGE':
            return {
                ...state,
                searchPage: action.payload,
            }
        case 'TRENDING_NEXT_PAGE':
            return {
                ...state,
                trendingPage: action.payload + 1,
            }
        case 'TRENDING_PREV_PAGE':
            return {
                ...state,
                trendingPage: action.payload - 1,
            }
        case 'MOVIES_NEXT_PAGE':
            return {
                ...state,
                moviesPage: action.payload + 1,
            }
        case 'MOVIES_PREV_PAGE':
            return {
                ...state,
                moviesPage: action.payload - 1,
            }
        case 'SERIES_NEXT_PAGE':
            return {
                ...state,
                seriesPage: action.payload + 1,
            }
        case 'SERIES_PREV_PAGE':
            return {
                ...state,
                seriesPage: action.payload - 1,
            }
        case 'SEARCH_NEXT_PAGE':
            return {
                ...state,
                searchPage: action.payload + 1,
            }
        case 'SEARCH_PREV_PAGE':
            return {
                ...state,
                searchPage: action.payload - 1,
            }
        default:
            break;
    }

}

export default reducer;



   // if (action.type === 'ADD_TRENDING') {
    //     return { ...state, trending: action.payload, loading: false }
    // }