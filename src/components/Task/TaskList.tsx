import { ClipboardText, PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { TaskItem } from './TaskItem';
import styles from './TaskList.module.css';

export default function TaskList() {
    const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (event: FormEvent) => {
        event.preventDefault();
        if (newTask.trim() === '') return;

        setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
        setNewTask('');
    }

    const handleToggleTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };


    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div>
            <div className={styles.inputContainer}>
                <form className={styles.form} onSubmit={handleAddTask}>
                    <input
                        className={styles.taskText}
                        type="text"
                        placeholder="Add a new task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button type="submit">
                        Add <PlusCircle size={24} />
                    </button>
                </form>
            </div>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h6 className={styles.created}>
                        Created tasks <span>{tasks.length}</span>
                    </h6>
                    <h6 className={styles.completed}>
                        Completed <span>{tasks.length > 0 ? `${tasks.filter(task => task.completed).length} of ${tasks.length} ` : "0"}</span>
                    </h6>
                </header>
                <div className={styles.taskList}>
                    {tasks.length === 0 ? (
                        <div className={styles.emptyContainer}>
                            <ClipboardText size={64} className={styles.emptyIcon} />
                            <h3 className={styles.emptyText}><span>You don't have any tasks registered yet</span></h3>
                            <h3 className={styles.emptyText}>Create tasks and organize your to-do items</h3>
                        </div>
                    ) : (
                        tasks.map((task, index) => (
                            <TaskItem
                                key={`${task.id}-${index}`}
                                id={task.id}
                                text={task.text}
                                completed={task.completed}
                                onToggle={handleToggleTask}
                                onDelete={handleDeleteTask}
                            />
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}
