import { useState } from 'react';

import { TaskList } from './components/feature/TaskList';
import { TaskType } from './domain/Type';
import { TaskForm } from './components/feature/TaskForm';

function App() {
  const [ tasks, setTasks ] = useState<TaskType[]>([]);

  return (
      <div>
        <TaskForm/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </div>
  );
}

export default App;