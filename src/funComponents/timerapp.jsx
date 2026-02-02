import { useEffect, useState } from "react"


function Timing(){
     const [count,setcount]=useState(0)
     const [start,setstart]=useState(false)
     const increment=()=>{
            setstart(true)
     }
      const stop=()=>{
            setstart(false)
     }
     const reset=()=>{
        setcount(0)
        setstart(false)
     }
     useEffect(()=>{
        console.log("useeffect")
        let Id;
        if(start){
           Id= setInterval(()=>{
                setcount((a)=>a+1)
            },1000)

        }
        return ()=>{clearInterval(Id)} //to clean code and stop the count
     },[start])
    return(
        <>
      <p>count:{count}</p>
      <button onClick={increment}>Start</button>
       <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
        </>
    )
}export default Timing