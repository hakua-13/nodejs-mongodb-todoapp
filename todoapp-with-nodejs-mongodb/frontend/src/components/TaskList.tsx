import { FC, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';
// import { IconName } from "react-icons/ai";

import { Task } from '../domain/Type';

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

  const Modal = () => {
    const closeModal = () => {
      setShowModal(false);
    }

    if(showModal){
      return(
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center" onClick={closeModal}>
          <div className="h-1/2 grid grid-cols-1 gap-3 p-8 bg-white" onClick={(e) => e.stopPropagation()}>
            <button  className="p-2" onClick={() => setShowModal(false)}>
              <AiOutlineClose/>
            </button>
            <div>
              <p>name</p>
              <input className="px-2 py-1 border border-slate-500 outline-none"/>
            </div>
            <div>
              <p>完了/未完了</p>
              <input type="checkbox"/>
            </div>
            <button className="p-px bg-teal-500 text-white ">修正</button>
          </div>
        </div>
      )
    }else{
      return null
    }
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
            {/* <div id="overlay"></div> */}
            <Modal/>

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