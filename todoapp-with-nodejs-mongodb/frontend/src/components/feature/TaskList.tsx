import { FC, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheckCircle } from 'react-icons/ai';

import { Task } from '../../domain/Type';
import { TaskEditModal } from "./TaskEditModal";

type Props = {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TaskList:FC<Props> = ({tasks, setTasks}) => {
  const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    const getAllTask = async() => {
      console.log('getAllTask')
    }

    getAllTask();
  }, [])

  const editTask = async() => {
    setShowModal(true);
  }

  const deleteTask = async(id: number) => {

  }

  return(
    <div>
      {tasks.length > 0? (
        tasks.map(task => (
          <div className="grid grid-cols-10 max-w-4xl mx-auto mt-5 p-3 items-center bg-white">
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