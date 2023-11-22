import { useReducer } from "react"
import { MoviesReducer } from "./MoviesReducer"
import { MoviesInitState } from "./MoviesInitState"
import { IMovieProperties } from "./MoviesInterface"
import { AddMovieType, ChangeMovieCategoryType, EditMovieType, RemoveMovieType, SetEditMovieDataType } from "./MoviesTypes"

export const useMoviesReducer = () => {
    const [moviesState, dispatch] = useReducer(MoviesReducer, MoviesInitState)

    const movies: IMovieProperties[] = moviesState.movies
    const movieToEdit: IMovieProperties | null | undefined = moviesState.movieToEdite
    const addMovieAction = (movie: IMovieProperties) => { dispatch({ type: AddMovieType, payload: movie }) }
    const removeMovieAction = (id: number) => { dispatch({ type: RemoveMovieType, payload: id }) }
    const changeMovieCategoryAction = (movie: IMovieProperties) => { dispatch({ type: ChangeMovieCategoryType, payload: movie }) }
    const editMovieAction = (movie: IMovieProperties) => { dispatch({ type: EditMovieType, payload: movie }) }
    const setEditMovieDataAction = (movie: IMovieProperties | null) => { dispatch({ type: SetEditMovieDataType, payload: movie }) }

    return {
        movies,
        movieToEdit,
        addMovieAction,
        removeMovieAction,
        changeMovieCategoryAction,
        editMovieAction,
        setEditMovieDataAction
    }
}