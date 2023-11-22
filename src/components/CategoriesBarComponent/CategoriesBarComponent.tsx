import React from 'react'
import styles from './CategoriesBarComponent.module.scss';
import { MOVIES_CATEGORIES } from '../../interfaces/movies';

export const CategoriesBarComponent: React.FC<any> = ({ setCategory, category }) => {
    return (
        <div className={styles.categories}>
            <h4
                className={
                    styles.categories__text +
                    " " +
                    (category === "" ? styles.categories__text__active : "")
                }
                onClick={() => {
                    setCategory("");
                }}
            >
                All
            </h4>
            /
            <h4
                className={
                    styles.categories__text +
                    " " +
                    (category === MOVIES_CATEGORIES.WATCHING ? styles.categories__text__active : "")
                }
                onClick={() => {
                    setCategory(MOVIES_CATEGORIES.WATCHING);
                }}
            >
                Watching
            </h4>
            /
            <h4
                className={
                    styles.categories__text +
                    " " +
                    (category === MOVIES_CATEGORIES.WATCHED ? styles.categories__text__active : "")
                }
                onClick={() => {
                    setCategory(MOVIES_CATEGORIES.WATCHED);
                }}
            >
                Watched
            </h4>
            /
            <h4
                className={
                    styles.categories__text +
                    " " +
                    (category === MOVIES_CATEGORIES.WANT_TO_WATCH ? styles.categories__text__active : "")
                }
                onClick={() => {
                    setCategory(MOVIES_CATEGORIES.WANT_TO_WATCH);
                }}
            >
                Want to watch
            </h4>
        </div>
    )
}