import { useState } from "react";
import styles from "./ModalComponent.module.scss";
import { IMAGE_SRC } from "../../constants/ImageConstants";

export const ModalComponent = (props: any) => {
    const movieToEdit = props.movieToEdit;

    const [title, setTitle] = useState(movieToEdit?.title || "");
    const [description, setDescription] = useState(movieToEdit?.description || "");

    return (
        <div className={styles.model}>
            <div className={styles.model__modelContent}>
                <div
                    className={styles.model__modelContent__close}
                    onClick={props.hideModalACtion}
                >
                    X
                </div>
                <form className={styles.model__modelContent__form}>
                    <div className={styles.model__modelContent__form__inputContainer}>
                        <label htmlFor="name">Title</label>
                        <input
                            type="text"
                            id="name"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div className={styles.model__modelContent__form__inputContainer}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        className={styles.model__modelContent__form__button}
                        onClick={(e) => {
                            e.preventDefault()
                            if (movieToEdit) {
                                props.editMovieAction({
                                    ...movieToEdit,
                                    title,
                                    description
                                })
                            } else {
                                props.addMovieAction({
                                    title,
                                    description,
                                    image: IMAGE_SRC.logo,
                                    id: Math.random()
                                })
                            }
                            props.hideModalACtion()
                        }}
                    >
                        {
                            movieToEdit ? "Edit" : "Add"
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};
