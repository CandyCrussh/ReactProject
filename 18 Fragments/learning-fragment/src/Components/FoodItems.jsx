
import { useState } from "react";
import Item
 from "./Item";
const FoodItems = ({items})=>{
    // let foodItems=['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk', 'ghee']
    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (item, event)=>{
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }
    
    return (
      <ul className="list-group">
        {items.map((item) => (
            <Item key = {item}
            bought={activeItems.includes(item)}
            foodItems={item} 
            handleBuyButton={(event)=>onBuyButton(item, event)}
            ></Item>
        ))}
      </ul>
    );
};
export default FoodItems;