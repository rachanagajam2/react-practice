import { useState } from "react"


function Counter(){

    let [count,setCount]=useState(0)
    let increment=()=>{
        setCount(count+1)
    }
    let decrement=()=>{
        setCount(count-1)
    }
    return(
        <>
        <button onClick={increment}>Increment</button>
        <p>count:{count}</p>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default Counter