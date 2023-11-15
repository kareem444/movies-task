import React from 'react'
import styles from './index.module.scss'

export const ModelComponent: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.modelContent}>
                <div className={styles.close}>X</div>
                <form>
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Title</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" />
                    </div>
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}