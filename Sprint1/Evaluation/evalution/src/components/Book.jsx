import {useState} from "react"
export function Book(props){
    let x=props.no
    const [counter, setCounter]= useState(x)
 
 

 function handlechange (value){
     setCounter(counter+value)
 }
 
    return(
        <div>
 <span>Books:</span>
        <button className="addBook"  onClick={()=>{handlechange(1)}}>
            +
        </button>
        <button className="remBook"  onClick={()=>{handlechange(-1)}}>
            -
        </button>
        <span className="totalBooks">{counter}</span>
        
        </div>
       
    )
}