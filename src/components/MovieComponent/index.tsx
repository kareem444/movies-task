import React from 'react'
import styles from './index.module.scss'
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
        <div className={styles.container}>
            <div className={styles.delete} onClick={onDelete}>X</div>
            <div className={styles.imageContainer}>
                <img src={image} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}