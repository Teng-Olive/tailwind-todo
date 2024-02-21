import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoform from './EditTodoform';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuidv4(), task, completed: false, isEditing: false }]);
  }

  console.log(todos)

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
  }

  return (
    <div className='text-center lg:w-4/12 sm:w-full sm:ml-5 p-4 border shadow-xl rounded-xl Todowrapper text-purple-600 font-serif text-2xl bg-black'>
      <h2 className='uppercase'>My daily to-do-app</h2>
      <TodoForm addTodo={addTodo} />

      {/* Generate a todo for each value in the state */}
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoform editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}
    </div>
  );
};

export default TodoWrapper;