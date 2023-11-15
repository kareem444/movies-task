import React from 'react'
import styles from './MovieComponent.module.scss'
import { IMoviesModel } from '../../interfaces/Movies'
import { moviesData } from '../../utils/DummyMoviesData'

export const MovieComponent: React.FC<IMoviesModel> = ({ image, description, title, id }) => {
    const onDelete = () => {
        moviesData.filter((value, index, array) => {
            if (value.id === id) {
                array.splice(index, 1)
            }
        })
    }

    return (
        <div className={styles.movie}>
            <div className={styles.movie__delete} onClick={onDelete}>X</div>
            <div className={styles.movie__imageContainer}>
                <img src={image} className={styles.movie__imageContainer__img}/>
            </div>
            <h3 className={styles.movie__title}>{title}</h3>
            <p className={styles.movie__description}>{description}</p>
        </div>
    )
}