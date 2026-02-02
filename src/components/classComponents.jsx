import React from "react"


class CounterApp extends React.Component{
    state={
        count:0
    }
     increment=()=>{
         this.setState({count:this.state.count+1})
     }
     decrement=()=>{
       this.setState({count:this.state.count-1}) 
        }
    reset=()=>{
        this.setState({count:0})
    }
render(){
         return(
            <div style={{margin:"10%"}}>
           <h1>CounterApp</h1>
           <div style={{display:"flex",padding:"5px"}}>
           <button style={{padding:"5px"}} onClick={this.increment}>Increment</button>
           <p style={{padding:"5px"}}>count :{this.state.count}</p>
           <button style={{padding:"5px"}} onClick={this.decrement}>Decreament</button>
           <button onClick={this.reset}>Reset</button>
            </div>
            </div>
         )
}
}
export default CounterApp