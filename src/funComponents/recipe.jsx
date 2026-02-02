import { useEffect, useState } from "react"
import { useParams } from "react-router"


function Recipe(){
    const[recipe,setRecipe]=useState("")
    let{id}=useParams()
    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes/${id}`)
        .then(res => res.json())
        .then((Response)=>{setRecipe(Response)})
      },[])
    return(
        <>
        <h1>recipe{id}</h1>
        {recipe&&<img src={recipe.image} style={{width:"300px"}}></img>}
        </>
    )
}
export default Recipe