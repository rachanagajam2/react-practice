import React from "react"
import Child from "./child"
class Parent extends React.Component{
    state={
        count:0
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log("parent.........")
        return(
            <>
            parent component {this.state.count}
            <button onClick={this.increment}>Increment</button>
            <Child/>
            </>
        )
    }
}
export default Parent

// when we click on increment btn it renders child and subchild also
// to avoid this use keyword purecomponet in childs and subchild(which are you want to prevent form this)
//class Child extends React.PureComponent
