import React from "react";
import styles from "./MovieComponent.module.scss";
import { IMAGE_SRC } from "../../constants/ImageConstants";
import { IMovieProperties } from "../../reducer/movies/MoviesInterface";
import { ChangeCategoryButtonsComponent } from "../ChangeCategoryButtonsComponent/ChangeCategoryButtonsComponent";

export const MovieComponent: React.FC<any> = ({
    image,
    description,
    title,
    id,
    category,
    removeMovieAction,
    changeMovieCategoryAction,
    setEditMovieDataAction,
    showModalAction,
}) => {
    const movie: IMovieProperties = { id, title, description, image, category };

    return (
        <div
            className={styles.movie}
            onClick={() => {
                setEditMovieDataAction(movie);
                showModalAction();
            }}
        >
            <div className={styles.movie__buttons}>
                <ChangeCategoryButtonsComponent
                    movie={movie}
                    changeMovieCategoryAction={changeMovieCategoryAction}
                />
                <div
                    className={styles.movie__buttons__delete}
                    onClick={(e) => {
                        e.stopPropagation();
                        removeMovieAction(id);
                    }}
                >
                    X
                </div>
            </div>
            <div className={styles.movie__imageContainer}>
                <img
                    src={IMAGE_SRC.logo}
                    className={styles.movie__imageContainer__img}
                />
            </div>
            <h3 className={styles.movie__title}>{title}</h3>
            <p className={styles.movie__description}>{description}</p>
        </div>
    );
};
