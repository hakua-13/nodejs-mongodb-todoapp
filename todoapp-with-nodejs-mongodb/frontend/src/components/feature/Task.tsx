import { AiOutlineCheckCircle, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';

import { TaskEditModal } from "./TaskEditModal";
import { TaskType } from "../../domain/Type";
import { FC, useState } from "react";

type Props = {
  task: TaskType,
  tasks: TaskType[],
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>,
}

export const Task:FC<Props> = ({ task, tasks, setTasks}) => {
  const [ showModal, setShowModal ] = useState(false);

  const editTask = async() => {
    setShowModal(true);
  }

  const deleteTask = async(id: string) => {
    const res = await axios.delete(`/api/v1/tasks/${id}`);
    if(res.status === 200){
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
    <div key={task.id} className="grid grid-cols-10 max-w-4xl mx-auto mt-5 p-3 items-center bg-white">
      <div className="mx-auto p-p">
        <AiOutlineCheckCircle className={`${!task.completed && "hidden"} text-xl text-green-600`}/>
      </div>
      <p className="col-span-7">{task.name}</p>
      <button className="mx-auto p-2 hover:bg-slate-100" onClick={editTask}>
        <AiOutlineEdit className="text-xl"/>
      </button>
      <TaskEditModal showModal={showModal} setShowModal={setShowModal} task={task} id={task.id}/>

      <button className="mx-auto p-2 hover:bg-slate-100">
        <AiOutlineDelete className="text-red-600 text-xl" onClick={() => deleteTask(task.id)}/>
      </button>
    </div>
  )
}