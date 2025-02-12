import { Header } from './components/Header';
import TaskList from './components/Task/TaskList';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  )
}