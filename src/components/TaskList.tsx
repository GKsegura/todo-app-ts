import { Task } from './Task';
import styles from './TaskList.module.css';

export const TaskList = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h6 className={styles.created}>Created tasks{" "}<span>0</span></h6>
                <h6 className={styles.completed}>Completed{" "}<span>0</span></h6>
            </header>
            <div className={styles.taskList}>
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    )
}