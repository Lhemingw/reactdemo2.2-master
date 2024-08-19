import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}{/* //the todo you need to print the to do list on top of app 
         */}
      </label>
    </div>
  )
}

