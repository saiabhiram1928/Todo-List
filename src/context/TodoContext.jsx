import React,{createContext,useEffect,useState} from 'react'
import ContentsData from '../data/Todo_data'


 const Contents_Context=createContext()
const TodoContext = ({children}) => {
     const [Contents, setContents] = useState([])
       //deletetodo
     const deletetodo =async (id) => {
        if (window.confirm('Are you sure it is completed?')) {
          await fetch(`/ContentsData/${id}`,{
            method:'DELETE'
          })
          setContents(Contents.filter((Contents) => Contents.id !== id))

        
        }
      }
      useEffect(()=>{
      fetchData()
      },[])
      //Add todo
      const fetchData=async()=>{
        const data=await fetch("/ContentsData?_sort=id&order=desc")
        const datafetch=await data.json()
        setContents(datafetch)
      }
      //submit todo
      const submitTodo = async(newtodo) => {
        const data= await fetch("/ContentsData",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(newtodo),
        
        })

      const datafetch=await data.json()
        newtodo.info.length>=12 ?  (setContents([ ...Contents,datafetch])):(setContents([...Contents]))
        
      }
      
    return (
        <div>
            <Contents_Context.Provider value={{Contents,deletetodo,submitTodo}}>
                  {children}
            </Contents_Context.Provider>
        </div>
    )
}

export default TodoContext;
export {Contents_Context}
