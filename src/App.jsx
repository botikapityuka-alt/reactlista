// TELJES KÓD, EZT ILLESSZED BE!
import React, { useState } from 'react'; 
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  
  const [todos, setTodos] = useState([
    { id: 1, text: 'Megvenni a tejet' },
    { id: 2, text: 'Megírni a kódod' },
    { id: 3, text: 'Gyakorolni a Reactot' },
  ]);

  const addTodo = (todoText) => {
      const newTodo = {
          id: Date.now(), 
          text: todoText,
      };
      setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Teendőlista 📝</h1>
      </header>
      
      <TodoForm addTodoFunction={addTodo} />
      <TodoList todos={todos} deleteTodoFunction={deleteTodo} />
    </div>
  );
}

export default App;