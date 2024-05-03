
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems';

function App() {
  const todoItems = [
    {
      name:'Buy Milk',
      date:'29/02/2024'
    },
    {
      name:'Go to office',
      date:'29/02/2024'
    },
    {
      name:'Go for dinner',
      date:'29/02/2024'
    },
  ];

  return <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
}

export default App
