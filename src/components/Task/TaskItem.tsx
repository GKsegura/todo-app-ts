import { Trash } from 'phosphor-react';
import styles from './TaskItem.module.css';

interface TaskProps {
    id: number;
    text: string;
    completed: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export const TaskItem = ({ id, text, completed, onToggle, onDelete }: TaskProps) => {
    return (
        <div className={styles.task}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={completed}
                onChange={() => onToggle(id)} // Agora ele alterna o estado ao clicar
            />
            <p className={`${styles.description} ${completed ? styles.completedText : ''}`}>
                {text}
            </p>
            <Trash size={24} className={styles.trash} onClick={() => onDelete(id)} />
        </div>
    );
};
