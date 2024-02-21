import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        className='todo-input todo-input bg-slate-200 text-black p-4 w-full sm:w-auto rounded-l sm:rounded-l-none sm:rounded-r m-1'
        placeholder='update task?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn  bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 px-4 rounded sm:rounded-l-none sm:rounded-r'>
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;