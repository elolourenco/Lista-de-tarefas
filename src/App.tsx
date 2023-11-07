import { useState } from 'react'



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
    <h1>Lista</h1>
    <div className="Todo list">
      {todos.map((todo) => (
          <div className='todo'>
            <div className="content">
              <p>{todo.text}</p>{todo.text}
            </div>
          </div>
      ))}
    </div>
  </div>
)
}
 export default App