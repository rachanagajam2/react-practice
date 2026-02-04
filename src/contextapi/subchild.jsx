
import { MyContext } from "./parent";
import React, { useContext } from "react";
function SubChlid(){
   const name = useContext(MyContext);
    return(
        <>
         <h1>this is subchild {name}</h1>
        </>
    )
}
export default SubChlid