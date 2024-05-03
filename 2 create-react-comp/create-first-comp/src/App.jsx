//1. Functional and Class based component

//We are using Functional Component
//Initially Stateless
//can use hooks for state and effects
//simpler and more concise
//more popular

import Hello from "./Hello";
import Random from "./Random";
import MyBtn from "./myBtn";

function App(){
    return <div>
        <h1>
           I am learning 
        </h1>
        <MyBtn></MyBtn>
        <Hello></Hello>
        <Random></Random>
        <Random></Random>
        <Random></Random>
        <Random></Random>
    </div>
}
export default App; //it is used so that we can use other place also

