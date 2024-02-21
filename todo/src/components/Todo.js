import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


 export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo bg-yellow-400 flex justify-between lg-4/12 w-sm-full p-4 border rounded-xl mt-1'>
    <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
    <div>
    <FontAwesomeIcon icon={faPenToSquare} onClick={() =>editTodo(task.id)} className='bg-black mr-4 shadow-xl'/>
    <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
    </div> {/*where we are going to store the icons*/}
    
      
    </div>
  )
}

export default Todo
