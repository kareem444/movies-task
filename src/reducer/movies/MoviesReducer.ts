import { IMovieProperties, IMoviesInitStateProperties } from "./MoviesInterface";
import { AddMovieType, RemoveMovieType, ChangeMovieCategoryType, EditMovieType, SetEditMovieDataType } from "./MoviesTypes";

export const MoviesReducer: (
    state: IMoviesInitStateProperties,
    action: any
) => IMoviesInitStateProperties = (
    state: IMoviesInitStateProperties,
    action: any
) => {
        switch (action.type) {
            case AddMovieType:
                return { ...state, movies: [...state.movies, action.payload] };
            case RemoveMovieType:
                const newMovies = state.movies.filter((movie: IMovieProperties) => {
                    if (movie.id !== action.payload) {
                        return movie;
                    }
                })
                return { ...state, movies: newMovies };
            case ChangeMovieCategoryType:
                const updatedCategories = state.movies.map((movie: IMovieProperties) => {
                    if (movie.id !== action.payload.id) {
                        return movie;
                    }
                    return action.payload;
                })
                return { ...state, movies: updatedCategories };
            case EditMovieType:
                const updatedMovies = state.movies.map((movie: IMovieProperties) => {
                    if (movie.id !== action.payload.id) {
                        return movie;
                    }
                    return action.payload;
                })
                return { ...state, movies: updatedMovies };
            case SetEditMovieDataType:
                return { ...state, movieToEdite: action.payload };
            default:
                return state;
        }
    };
