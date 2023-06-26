import { FC, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheckCircle } from 'react-icons/ai';

import { Task } from '../../domain/Type';
import { TaskEditModal } from "./TaskEditModal";
import axios from "axios";

type Props = {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

type RawTask = {
  name: string,
  completed: boolean,
  _id: string,
  __v: number
}

export const TaskList:FC<Props> = ({tasks, setTasks}) => {
  const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    const getAllTask = async() => {
      const { data:rawAllTask } = await axios.get<RawTask[]>("/api/v1/tasks");
      const allTasks:Task[]  = rawAllTask.map(task => ({
        id: task._id,
        name: task.name,
        completed: task.completed,
      }))
      setTasks(allTasks);
    }

    getAllTask();
  }, [])

  const editTask = async() => {
    setShowModal(true);
  }

  const deleteTask = async(id: string) => {
    const res = await axios.delete(`/api/v1/tasks/${id}`);
    if(res.status == 200){
      const newTasks = tasks.filter(task => {
        if(task.id === id){
          return false;
        }else{
          return true;
        }
      })
      setTasks(newTasks);
    }
  }

  return(
    <div>
      {tasks.length > 0? (
        tasks.map((task) => (
          <div key={task.id} className="grid grid-cols-10 max-w-4xl mx-auto mt-5 p-3 items-center bg-white">
            <div className="mx-auto p-p">
              <AiOutlineCheckCircle className={`${!task.completed && "hidden"} text-xl text-green-600`}/>
            </div>
            <p className="col-span-7">{task.name}</p>
            <button className="mx-auto p-2 hover:bg-slate-100" onClick={editTask}>
              <AiOutlineEdit className="text-xl"/>
            </button>
            <TaskEditModal showModal={showModal} setShowModal={setShowModal}/>

            <button className="mx-auto p-2 hover:bg-slate-100">
              <AiOutlineDelete className="text-red-600 text-xl" onClick={() => deleteTask(task.id)}/>
            </button>
          </div>
        ))
      ):(
        <h1>タスクなし</h1>
      )}
    </div>
  )
}