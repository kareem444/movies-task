import { MOVIES_CATEGORIES } from "../../interfaces/movies"

export interface IMovieProperties {
    id: number
    title: string
    description: string
    image: string
    category?: MOVIES_CATEGORIES
}

export interface IMoviesInitStateProperties {
    movies: IMovieProperties[]
    movieToEdite? : IMovieProperties | null
}