import React from "react"
import Subchild from "./subchild"
class Child extends React.PureComponent{
    render(){
         console.log("child ..........")
        return(
            <>
            child component
            <Subchild/>
            </>
        )
    }
}
export default Child