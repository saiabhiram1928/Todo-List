import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Todo_loop from './Todo_change/Todo_loop'
import TodoContext from './context/TodoContext'

const App = () => {
  return (
    <div>
      <TodoContext>
       <Header />
      <Form/>
      <Todo_loop/>
    </TodoContext>
    </div>
  )
}

export default App
