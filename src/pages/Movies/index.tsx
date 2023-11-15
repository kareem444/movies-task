import React from 'react'
import styles from './index.module.scss'
import { moviesData } from '../../utils/DummyMoviesData'
import { IMoviesModel } from '../../interfaces/Movies'
import { MovieComponent } from '../../components/MovieComponent'
import { ModelComponent } from '../../components/modelComponent'

export const Movies: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            {moviesData.map((value: IMoviesModel, index: number) => {
                return (
                    <div key={index}>
                        <MovieComponent {...value} key={value.id} />
                    </div>
                )
            })}
            <ModelComponent />
        </div>
    )
}