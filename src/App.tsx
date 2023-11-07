import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'




function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:3,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
  ])

return (
  <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className="todo list">
      {todos.map((todo) => (
          <Todo todo={todo}/>
          
      ))}
    </div>
    <TodoForm />
  </div>

)
}
 export default App