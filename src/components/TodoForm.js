import React,{useState} from 'react'

export default function TodoForm({addTodo}) {
    const [value ,setValue] =useState("")
    const handlesubmit=e=>{
        e.preventDefault()
        addTodo(value)
        setValue("")   

    }

  return (
    <>
    <form className='TodoForm' onSubmit={handlesubmit}>
        <input  required type='text' className='todo-input'value={value} placeholder='What is the Task Today ?'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit'className='todo-btn'>Add Task</button>
        
    </form> 

    </>
  )
}
