import { useState } from 'react';

import { TaskList } from './components/feature/TaskList';
import { Task } from './domain/Type';
import { TaskForm } from './components/feature/TaskForm';

const sampleData = [
  {
  name: "zkp",
  completed: false,
  id: 1
  },
  {
  name: "node js",
  completed: true,
  id: 2
  },
  {
    name: "read uniswap contract",
    completed: true,
    id: 2
    },
]

function App() {
  const [ tasks, setTasks ] = useState<Task[]>(sampleData);

  return (
      <div>
        <TaskForm/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </div>
  );
}

export default App;