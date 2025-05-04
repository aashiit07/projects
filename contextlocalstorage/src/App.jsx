import { useEffect, useState } from 'react'
import './App.css'
import {Todoprovider} from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos,setTodos]=useState([])

 const addTodo=(newTodo)=>{
  setTodos((prevTodo)=>[{id:Date.now(),...newTodo},...prevTodo])
 }
  
 const updatedTodo=(id,newTodo)=>{
  setTodos((prevTodo)=>prevTodo.map((todos)=> (todos.id===id?{...todos,todo:newTodo}:todos)))
 }

 const deletedTodo=(id)=>{
  setTodos((prevTodo)=>prevTodo.filter((todos)=>todos.id!==id))
 }

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todos) =>
        todos.id === id ?
          { ...todos, completed: !todos.completed } :
          todos))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos&&todos.length>0) setTodos(todos);
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <Todoprovider value={{todos,addTodo,deletedTodo,updatedTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
        
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}
              className='w-full'>
                <TodoItem todo={todo}/>
              </div>
           ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
