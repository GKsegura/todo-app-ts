/**
* Autor: José Segura
* GitHub: https://github.com/GKsegura
* Data: 2025
*/

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