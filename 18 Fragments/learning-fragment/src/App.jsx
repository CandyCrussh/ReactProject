import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import FoodItems from './Components/FoodItems'
import ErrorMessage from './Components/ErrorMessage'
import Container from './Components/Container'
import FoodInput from './Components/FoodInput'

function App() {


  // let foodItems=['Sabji', 'Green Vegetables', 'Roti', 'Salad', 'Milk', 'ghee']

  // let foodItems=[]
  // let textStateArr = useState("Food Item entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // let [textToShow, setTextState] = useState();

  // let [foodItems,setFoodItems] = useState(['salad', 'Sabji', 'Green Vegetables', 'Roti'])
  let [foodItems,setFoodItems] = useState([])
  // console.log(textToShow)
  
  // let textToShow = "Food Item entered by user";

  const OnKeyDown = (event)=>{
    if(event.key == 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value="";
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      console.log(newFoodItem)
    }
    // console.log(event.target.value)
    // setTextState(event.target.value)
    // textToShow = event.target.value
  }
  // let emptyMessage =  foodItems.length == 0? <h3>I am still hungry !!!</h3>:null

  // if (foodItems.length == 0){
  //   return <h1>I am still hungry !!!</h1>
  // }
  return(
    <>
    <Container>
      <h1 className='foodHeading'>Healthy Food</h1>
      {/* {emptyMessage} */}
      {/* {foodItems.length == 0 && <h3>I am still hungry !!!</h3>} */}
      <FoodInput handleOnKeyDown={OnKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}/>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}/>
      {/* <ul class="list-group">
        {foodItems.map((item) => (<li key={item} class="list-group-item">{item}</li>
        ))}
      </ul>  */}
    </Container>
    {/* <Container>
      <p>Above is the list of healthy foods that are good for health.</p>
    </Container> */}
    </>
  );
}

export default App
// key gives unique id to elements if  elements are in loop