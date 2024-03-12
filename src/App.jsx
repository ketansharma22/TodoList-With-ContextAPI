import { useEffect, useState } from 'react'
import './App.css'
import Todoinput from './components/Todoinput'
import Todoitems from './components/Todoitems'
import {TodoContextProvider} from './context'


function App() {
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id ===id ? todo : prevTodo )))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !=id ))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id ===id ? {...prev , completed: !prevTodo.completed} : prevTodo ))
  }

  useEffect(()=>{
    const todos =JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.lenght>0){
      setTodos(todos)
    }

  },[])

  useEffect(()=>{
    localStorage,setTodos("todos",JSON.stringify(todos))
  },[todos])

  return(
    <TodoContextProvider value={{todos,addTodo,deleteTodo,toggleComplete,updateTodo}}>
      <div>
        <Todoinput/>
      </div>

      <div>
        <Todoitems/>
      </div>
    </TodoContextProvider>
  )
}

export default App
