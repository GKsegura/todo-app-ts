import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  )
}