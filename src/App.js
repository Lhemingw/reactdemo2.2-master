import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// fix this import uuidv4 from 'uuid/v4', put top import { v4 as uuidv4 } from 'uuid'; install uuidv4 in package.json
 {/* navbar */}
      <div className="App">
        <Router>
         <Navbar />
         <Routes>
          <Route path="/"exact />
         </Routes>
         </Router>
      </div>
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
//  we need to store an object as well as a name so back inside of our app lets
//     change area ([ 'Todo 1', 'Todo 2'])
 //set todos 1. pass it a value for example empty area would clear all todos or you can just 
    //use the previous value in our case our previous todos is a function that is going to give us the previous todos
    //which allows us to change that so we could say our new todos is ging to be equal previous todos and we
    //want to spread this over our area and add a new todo to that list so 
//id: uuidv4(),
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
 // functions so in our case antime our arrey of today's changes we want to save our todos
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
    
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>

     
    </>
  ) 

}

export default App;
 
 
   

    //This is onClick={handleAddTodo} to put the to do list in 
//     this will clear out text box

//     previous todo, add our tod  and then set our to dos to that to do list but
//     no access to the main field, fix that by using the user ref Hook reference elements inside 
//     our html in our case the input, so we can say ref here is going to be equal to a variable we're just going
//     to call this to-do name ref and then we can create this variable up here by just saying const todoNameRef
//      is equal to useRef now we are going to have access to this input element inside this to do name ref
//     variable & to access it we just say to do name ref current, which is what ever element we are going to be referencing witch is this input. .value is value of input

  
//    
    // <>
   

