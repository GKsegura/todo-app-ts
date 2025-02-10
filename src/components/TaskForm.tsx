import { PlusCircle } from 'phosphor-react';
import styles from './TaskForm.module.css';

export const TaskForm = () => {
    return (
        <div className={styles.inputContainer}>
            <form className={styles.form}>
                <input className={styles.taskText} type="text" placeholder="Add a new task" />
                <button type="submit">
                    Add<PlusCircle size={24} />
                </button>
            </form >
        </div>
    )
}