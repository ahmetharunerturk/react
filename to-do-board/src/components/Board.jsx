import React from 'react'

export const Board = ({task,index,setTaskList,taskList}) => {

    const handleDelete = () =>{
        let removeIndex = taskList.indexOf(task)
        taskList.splice(removeIndex,1)
        setTaskList((currentTasks =>currentTasks.filter(todo=>index===removeIndex)))
    }

  return (
    <>
        <div className=' max-w-xl rounded-xl flex flex-col items-center justify-center border tex-center text-lg pt-3 pb-4 px-4'>
            <p>{task}</p>   
            <button
                className='bg-red-500 text-white rounded-lg py-1 px-2 mt-4'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>

    
    
    </>
  )
}
