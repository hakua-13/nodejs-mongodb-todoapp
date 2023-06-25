import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskEditModal:FC<Props> = ({ showModal, setShowModal }) =>  {
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