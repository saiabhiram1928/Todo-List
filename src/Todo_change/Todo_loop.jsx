import React,{useContext} from 'react'
import TodoList from '../components/TodoList'
import {Contents_Context} from '../context/TodoContext'

const Todo_loop = () => {
    const {Contents,deletetodo}=useContext(Contents_Context)

    return (
        <div>
            {
                Contents.map((Content)=>{
                  return   <TodoList Contents={Content} deletetodo={deletetodo} key={Content.id}/>
                })
            }
          
        </div>
    )
}

export default Todo_loop
