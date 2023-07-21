import { useState } from "react";


function Counter() {
    let [counter, setCounter] = useState(0);
    const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 12);
console.log(found);
    function increase (){
        setCounter( ++counter )
    }
    function decrease (){
        setCounter( --counter )
    }
  return (
    
   <>
   <h2> Counter </h2>
   <input type="text" value={counter}></input>   
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
   </>
  )
}

export default Counter