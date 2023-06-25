import { useState } from "react";

export const TaskForm = () => {
  const [ newTask, setNewTask ] = useState<string>('');

  const onChangeNewTask = (e:any) => {
    setNewTask(e.target.value);
  }

  const createNewTask =(e:any) => {
    setNewTask('');
  }

  return(
    <form className="max-w-4xl mx-auto mt-20 p-8 bg-white">
      <h1 className="text-center text-lgr">Node.jsでTodoアプリ</h1>
      <div className="grid grid-cols-1 gap-6 justify-items-center mt-6">
        <input className="w-2/3 p-2 border border-slate-200 bg-slate-100 outline-none" placeholder="例: 〇〇の勉強" onChange={onChangeNewTask}/>
        <button className="px-8 py-2.5 text-sm text-white bg-teal-500" onClick={createNewTask}>送信</button>
      </div>
    </form>
  )
}