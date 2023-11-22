import { IMAGE_SRC } from "../constants/ImageConstants";
import { IMovieProperties } from "../reducer/movies/MoviesInterface";

export const moviesData: IMovieProperties[] = [
    {
        id: 1,
        title: "The Adventure Begins",
        description: "Join our heroes on an epic journey filled with action and suspense.",
        image: IMAGE_SRC.logo
    },
    {
        id: 2,
        title: "Mystery of the Lost City",
        description: "Unravel the secrets hidden within an ancient civilization.",
        image: IMAGE_SRC.logo
    },
    {
        id: 3,
        title: "Love in Paris",
        description: "A romantic tale set against the backdrop of the City of Love.",
        image: IMAGE_SRC.logo
    },
];