import React,{useContext} from 'react'



const TodoList = ({Contents,deletetodo}) => {

    return (
        <div>
            <section className="body-font overflow-hidden border-2 text-white">
                <div className="container px-2 py-10 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100 ">
                        <div className="py-8 flex flex-wrap md:flex-nowrap justify-center items-center">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col static top-0 left-0">
                                <span className="font-semibold title-font text-gray-200">{Contents.id}</span>
                                <span className="mt-1 text-gray-100 text-sm">{Contents.date}</span>
                            </div>
                            <div className="divider md:divider-vertical"></div> 
                        
                            <div className="md:flex-grow ml-10">
                                <p className="leading-relaxed">{Contents.info}</p>
                                
                               <button className="btn btn-warning mt-5" onClick={()=>{deletetodo(Contents.id)}}>Completed</button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default TodoList
