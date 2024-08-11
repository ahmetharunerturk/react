import React from 'react'
import { useState } from 'react'

export const Input = ({taskList, setTaskList}) => {

    const[input,setInput] = useState("")
    
    console.log(input);

    const handleAddTask = (e) =>{
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")
    }
    
    return (
    <>
    
        <form className='flex flex-row items-center gap-3'>
            <input
                className="border rounded-lg px-2 text-lg"
                type="text"
                placeholder='Add a task'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button 
                className='bg-violet-200 text-white py-2 px-3 rounded-lg'
                onClick={handleAddTask}>Add</button>
        </form>
       
    
    </>
  )
}
