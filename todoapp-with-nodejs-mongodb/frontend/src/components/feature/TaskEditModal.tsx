import { FC, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TaskType } from '../../domain/Type';

type Props = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  tasks: TaskType[],
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>,
  task: TaskType,
  id: string
}

export const TaskEditModal:FC<Props> = ({ showModal, setShowModal, task, id}) =>  {
  const [ taskNewName, setNewTaskName ] = useState<string>(task.name);
  const [ taskCompleted, setTaskCompleted ] = useState<boolean>(task.completed)

  useEffect(() => {
    console.log('id: ', id);
  },)

  const closeModal = () => {
    setShowModal(false);
  }

  const onChangeTaskName = (e:any) => {
    setNewTaskName(e.target.value);
  }

  const onChangeTaskCompleted = (e:any) => {
    // task.completed = !task.completed
    setTaskCompleted(preVal => !preVal);
  }

  const editTask = () => {
    task.name = taskNewName;
    task.completed = taskCompleted;
  }

  if(showModal){
    return(
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center" onClick={closeModal}>
        <div className="h-1/2 grid grid-cols-1 gap-3 p-8 bg-white" onClick={(e) => e.stopPropagation()}>
          <button  className="w-8 h-8 hover:bg-slate-200" onClick={() => setShowModal(false)}>
            <AiOutlineClose className="mx-auto"/>
          </button>
          <div>
            <p>name</p>
            <input className="px-2 py-1 box-content border border-slate-500 outline-none" onChange={onChangeTaskName} value={taskNewName}/>
          </div>
          <div>
            <p>完了/未完了</p>
            <input type="checkbox" onChange={onChangeTaskCompleted} defaultChecked={task.completed}/>
          </div>
          <button className="p-px bg-teal-500 text-white hover:opacity-60" onClick={editTask}>編集</button>
          <button className="p-px bg-teal-500 text-white hover:opacity-60" onClick={closeModal}>タスクに戻る</button>
        </div>
      </div>
    )
  }else{
    return null
  }
}