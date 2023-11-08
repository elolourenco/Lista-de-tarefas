import React, { useState } from 'react';
import './App.css';
import TodoForm from './componentes/todoForm'
import Todo from './componentes/todo';


function App() {
  const [todos, setTodos] = useState(
  [{
    id: 1,
    text: 'Estudar react',
    category: 'estudos',
    isCompleted: false
  },
  {
    id: 2,
    text: 'Estudar css',
    category: 'estudos',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Estudar javascrip',
    category: 'estudos',
    isCompleted: false
  }
  ]);

  const AddTodo = (text, category) => {

    const newTodo = [...todos,{
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false
    }]
    setTodos(newTodo)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filterTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filterTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }
  

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todos.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm AddTodo={AddTodo} />
    </div>
  )
}

export default App
