import {useState} from "react"
export function Inkpen(props){
    let x=props.no
    const [counter, setCounter]= useState(x)
 
    function handlechange (value){
        setCounter(counter+value)
    }
    return(
        <div>
 <span>Inkpen:</span>
        <button className="addInkpen" onClick={()=>{handlechange(1)}}>
            +
        </button>
        <button className="remInkpen" onClick={()=>{handlechange(1)}}>
            -
        </button>
        <span className="totalInkpens">{counter}</span>
        </div>
       
    )
}