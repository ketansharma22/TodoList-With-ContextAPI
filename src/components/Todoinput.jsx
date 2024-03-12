import React, { useState } from 'react'
import '../styles/Todoinput.css'
import { useTodo } from '../context'


function Todoinput() {

      const [todo,setTodo]=useState("")
      const {addTodo}=useTodo()

      const add=(e)=>{
            e.preventDefault()
            
            if(!todo) return

            addTodo({todo,completed:false})
            setTodo("")
      }

  return (
        <div id='container'>
            <h1>Manage Your ToDo's </h1>
            <form onSubmit={add}>
                  <input value={todo} onChange={(e)=>{setTodo(e.target.value)}} type='text' placeholder='Write your Todo here...' />
                  <button>Add</button>
            </form>
        </div>
  )
}

export default Todoinput