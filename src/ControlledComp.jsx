// A controlled component is a form element (input, textarea, select) whose value is controlled by React state.

import { useRef, useState } from "react"

function ControlledCom(){
    let name = useRef("")
     let pwd =useRef("")
    const SubEvent=(e)=>{
        e.preventDefault()
        console.log("form is submitted",name.current.value,pwd.current.value)
    }
    
    return(
        <form onSubmit={SubEvent}>
            <input type="text" placeholder="Enter your name " ref={name} />
            <input type="password" placeholder="Enter your " ref={pwd} />
            <button type="submit">save</button>
        </form>
    )
}
export default ControlledCom