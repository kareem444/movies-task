import React, { useState } from "react";
import styles from "./Movies.module.scss";
import { MovieComponent } from "../../components/MovieComponent/MovieComponent";
import { ModalComponent } from "../../components/ModalComponent/ModalComponent";
import { useModalReducer } from "../../reducer/modal/useModalreducer";
import { IMovieProperties } from "../../reducer/movies/MoviesInterface";
import { useMoviesReducer } from "../../reducer/movies/useMoviesreducer";
import { CategoriesBarComponent } from "../../components/CategoriesBarComponent/CategoriesBarComponent";

export const Movies: React.FC<{}> = () => {
    const { showModal, showModalAction, hideModalACtion } = useModalReducer();
    const {
        movies,
        movieToEdit,
        addMovieAction,
        removeMovieAction,
        changeMovieCategoryAction,
        setEditMovieDataAction,
        editMovieAction,
    } = useMoviesReducer();

    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");

    const filterMovieByCategory = (movei: IMovieProperties) => {
        if (category === "") {
            return true;
        }
        return movei.category === category;
    };

    const filterBySearch = (movie: IMovieProperties) => {
        if (search === "") {
            return true;
        }
        return movie.title.toLowerCase().includes(search.toLowerCase());
    }

    return (
        <div className={styles.movies}>
            <CategoriesBarComponent setCategory={setCategory} category={category} />
            <input
                type="text"
                placeholder="Search"
                className={styles.movies__search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className={styles.movies__content}>
                {movies.map((value: IMovieProperties, index: number) => {
                    if (filterMovieByCategory(value)) {
                        if (filterBySearch(value)) {
                            return (
                                <MovieComponent
                                    {...value}
                                    removeMovieAction={removeMovieAction}
                                    changeMovieCategoryAction={changeMovieCategoryAction}
                                    setEditMovieDataAction={setEditMovieDataAction}
                                    showModalAction={showModalAction}
                                    key={value.id}
                                />
                            );
                        }
                    }
                })}
            </div>
            <div
                className={styles.movies__float_action_button}
                onClick={() => {
                    setEditMovieDataAction(null);
                    showModalAction();
                }}
            >
                +
            </div>
            {showModal && (
                <ModalComponent
                    hideModalACtion={hideModalACtion}
                    addMovieAction={addMovieAction}
                    movieToEdit={movieToEdit}
                    editMovieAction={editMovieAction}
                    movies={movies}
                />
            )}
        </div>
    );
};
