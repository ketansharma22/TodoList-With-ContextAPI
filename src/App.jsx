import { useEffect, useState } from 'react'
import './App.css'
import Todoinput from './components/Todoinput'
import Todoitems from './components/Todoitems'
import {TodoProvider} from './context'



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

    if( todos && todos.lenght > 0){
      setTodos(todos)
    }

  },[])

  useEffect(()=>{
    localStorage,setTodos("todos",JSON.stringify(todos))
  },[todos])

  return(
    <TodoProvider value={{ todos ,addTodo,deleteTodo,toggleComplete,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <Todoinput/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((todo) => (
                            <div key={todo.id}
                            className='w-full'
                            >
                              <Todoitems todo={todo} />
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
