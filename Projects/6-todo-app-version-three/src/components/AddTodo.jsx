import { useState } from "react";
import { BiMessageAdd } from 'react-icons/bi';

function AddTodo({onNewItem}){

    const [todoName, setTodoName] = useState("");
    const [todoDate, setTodoDate] = useState("");
    
    const handleNameChange = (event)=>{
        setTodoName(event.target.value)
    }
    const handleDateChange = (event)=>{
        setTodoDate(event.target.value)
    }

    const handleAddButtonClicked=()=>{
        onNewItem(todoName, todoDate)
        setTodoDate("");
        setTodoName("");
    }

    return (
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" 
                    placeholder='Enter Todo'
                    value={todoName} 
                    onChange={handleNameChange}/>
                </div>
                <div className="col-4">
                    <input type="date"
                    placeholder='date' 
                    value={todoDate}
                    onChange={handleDateChange}/>
                </div>
                <div className="col-2">
                    <button type='button' 
                    className="btn btn-success kg-button" 
                    onClick={handleAddButtonClicked}
                    >
                      <BiMessageAdd />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AddTodo;