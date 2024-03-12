import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"message of todo",
            completed: false,
        }

        
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    useContext(TodoContext)
}

export const TodoContextProvider=TodoContext.Provider
