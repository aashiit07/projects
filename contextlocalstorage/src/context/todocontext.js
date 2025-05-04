import { useContext,createContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo Msg",
            completed:false,
        }
    ],
    addTodo:(newtodo)=>{},
    updatedTodo:(id,newtodo)=>{},
    deletedTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider