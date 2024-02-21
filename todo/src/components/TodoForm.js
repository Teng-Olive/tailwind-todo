import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className='TodoForm flex justify-center flex-col sm:flex-row w-full sm:w-auto mt-10 mb-10' onSubmit={handleSubmit}>
      <input
        className='todo-input bg-slate-300 text-black p-4 w-full sm:w-auto rounded-l sm:rounded-l-none sm:rounded-r'
        placeholder='What needs to be done?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type='submit'
        className='todo-btn bg-yellow-300 hover:bg-blue-600  font-bold py-2 px-4 rounded sm:rounded-l-none sm:rounded-r'
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;