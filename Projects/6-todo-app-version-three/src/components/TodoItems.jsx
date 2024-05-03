import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'

const TodoItems = ({todoItems, onDeleteClick}) =>{
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map(item=>
            <TodoItem 
                key={item.name}
                todoDate={item.date}
                todoName={item.name}
                onDeleteClick={onDeleteClick}
            />)}
        </div>
    );
};
export default TodoItems;             