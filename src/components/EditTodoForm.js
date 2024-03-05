import React,{useState} from 'react'


export default function EditTodoForm({editTodo,task}) {
    const [value ,setValue] =useState(task.task)
    const handlesubmit=e=>{
        e.preventDefault()
        editTodo(value,task.id)
        setValue("")
    }
  return (
    <>
    <form className='TodoForm' onSubmit={handlesubmit}>
        <input type='text' className='todo-input'value={value} placeholder='Update Task '
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit'className='todo-btn'>Update Now</button>
        
    </form> 

    </>
  )
}
