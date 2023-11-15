import React from 'react'
import styles from './Movies.module.scss'
import { moviesData } from '../../utils/DummyMoviesData'
import { IMoviesModel } from '../../interfaces/Movies'
import { MovieComponent } from '../../components/MovieComponent/MovieComponent'
import { ModelComponent } from '../../components/ModelComponent/ModelComponent'

export const Movies: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            {moviesData.map((value: IMoviesModel, index: number) => {
                return (
                    <div key={value.id}>
                        <MovieComponent {...value} />
                    </div>
                )
            })}
            <ModelComponent />
        </div>
    )
}