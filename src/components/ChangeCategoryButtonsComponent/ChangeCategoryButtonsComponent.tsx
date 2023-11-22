import React from 'react'
import styles from './ChangeCategoryButtonsComponent.module.scss'
import { MOVIES_CATEGORIES } from '../../interfaces/movies'

export const ChangeCategoryButtonsComponent: React.FC<any> = ({ movie, changeMovieCategoryAction }) => {
    return (
        <div className={styles.change_category}>
            <button
                className={
                    styles.change_category__button +
                    " " +
                    (movie.category === MOVIES_CATEGORIES.WATCHING
                        ? styles.change_category__button__active
                        : "")
                }
                onClick={(e) => {
                    e.stopPropagation()
                    changeMovieCategoryAction({
                        ...movie,
                        category: MOVIES_CATEGORIES.WATCHING,
                    })
                }
                }
            >
                watching
            </button>
            <button
                className={
                    styles.change_category__button +
                    " " +
                    (movie.category === MOVIES_CATEGORIES.WANT_TO_WATCH
                        ? styles.change_category__button__active
                        : "")
                }
                onClick={(e) => {
                    e.stopPropagation()
                    changeMovieCategoryAction({
                        ...movie,
                        category: MOVIES_CATEGORIES.WANT_TO_WATCH,
                    })
                }
                }
            >
                favourit
            </button>
            <button
                className={
                    styles.change_category__button +
                    " " +
                    (movie.category === MOVIES_CATEGORIES.WATCHED
                        ? styles.change_category__button__active
                        : "")
                }
                onClick={(e) => {
                    e.stopPropagation()
                    changeMovieCategoryAction({
                        ...movie,
                        category: MOVIES_CATEGORIES.WATCHED,
                    })
                }
                }
            >
                watched
            </button>
        </div>
    )
}