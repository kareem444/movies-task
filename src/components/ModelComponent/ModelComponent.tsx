import React from 'react'
import styles from './ModelComponent.module.scss'

export const ModelComponent: React.FC<{}> = () => {
    return (
        <div className={styles.model}>
            <div className={styles.model__modelContent}>
                <div className={styles.model__modelContent__close}>X</div>
                <form className={styles.model__modelContent__form}>
                    <div className={styles.model__modelContent__form__inputContainer}>
                        <label htmlFor="name">Title</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className={styles.model__modelContent__form__inputContainer}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" />
                    </div>
                    <button className={styles.model__modelContent__form__button}>Add</button>
                </form>
            </div>
        </div>
    )
}