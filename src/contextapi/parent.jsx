import Child from "./child"

import React, { createContext } from "react";
// Create Context
export const MyContext = createContext();

function Parent(){
    const name = "Rachana";  // Static value
  
    return(
        <MyContext value={name}>
            <Child/>
        </MyContext>
        
    )
   
}
export default Parent