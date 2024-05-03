
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react';

function App() {
  // const initialTodoItems = [
  //   {
  //     name:'Buy Milk',
  //     date:'29/02/2024'
  //   },
  //   {
  //     name:'Go to office',
  //     date:'29/02/2024'
  //   },
  //   {
  //     name:'Go for dinner',
  //     date:'29/02/2024'
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate)=>{
    console.log(`new item Added: ${itemName} Date: ${itemDate}`)
    const newTodoItems = [...todoItems, {name: itemName,
    date: itemDate}]
    setTodoItems(newTodoItems)
  }

  const handleDeleteItem = (TodoItemName)=>{
    const newTodoItems = todoItems.filter(item => item.name!=TodoItemName);
    setTodoItems(newTodoItems)
    // console.log(`Item deleted : ${TodoItemName}`)
  }

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo 
        onNewItem={handleNewItem}
      />
      { todoItems.length === 0  && 
        <WelcomeMessage 
          todoItems={todoItems}>
        </WelcomeMessage> 
      }
      <TodoItems 
        todoItems={todoItems} 
        onDeleteClick = {handleDeleteItem}>
      </TodoItems>
    </center>
  );
}

export default App
