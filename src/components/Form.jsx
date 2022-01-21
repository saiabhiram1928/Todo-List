import React,{useState,useContext} from 'react'
import {Contents_Context} from '../context/TodoContext'
import ReactDOM from 'react-dom';

const Form = () => {
    const [todo, settodo] = useState("")
    const [date, setdate] = useState("")
     const changingtodo=(e)=>{
       settodo(e.target.value);
     }
    const changingdate=(e)=>{
       setdate(e.target.value)
    }
    const {submitTodo}=useContext(Contents_Context)
    const handlesubmit=(e)=>{
        e.preventDefault()
            const newtodo={
             
              date:date,
              info:todo
            }
            submitTodo(newtodo)
           
         
         
        
      }
      const animate=todo.length
    
    return (
        <div>
            <form onSubmit={handlesubmit}>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center  mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">Enter todo here</h1>
                            <h6 className={` my-4 text-gray-200 animate__animated ${(animate<12 && animate>1) ? "animate__heartBeat":"hidden"} animate__infinite` }>Enter at least 10 characters</h6>
                            

                        </div>
                        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className="relative flex-grow w-full">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-200">Todo</label>
                                <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                value={todo} onChange={changingtodo} required/>
                            </div>
                            <div className="relative flex-grow w-full">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-100">Date</label>
                                <input type="date" id="date" name="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-200  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-pointer focus:cursor-pointer" value={date} onChange={changingdate} required/>
                            </div>

                            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >submit</button>  
                           
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default Form
