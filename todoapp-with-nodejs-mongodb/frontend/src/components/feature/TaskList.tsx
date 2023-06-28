import { FC, useEffect } from "react";

import { TaskType } from '../../domain/Type';
import axios from "axios";
import { Task } from "./Task";

type Props = {
  tasks: TaskType[],
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

type RawTask = {
  name: string,
  completed: boolean,
  _id: string,
  __v: number
}

export const TaskList:FC<Props> = ({tasks, setTasks}) => {
  // const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    const getAllTask = async() => {
      const { data:rawAllTask } = await axios.get<RawTask[]>("/api/v1/tasks");
      const allTasks:TaskType[]  = rawAllTask.map(task => ({
        id: task._id,
        name: task.name,
        completed: task.completed,
      }))
      setTasks(allTasks);
    }

    getAllTask();
  }, [])

  return(
    <div>
      {tasks.length > 0? (
        tasks.map((task) => (
          
          <Task task={task} tasks={tasks} setTasks={setTasks}/>
        ))
      ):(
        <h1>タスクなし</h1>
      )}
    </div>
  )
}