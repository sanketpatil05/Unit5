import {useState} from "react"
export function Notebook(props){
    let x=props.no
    const [counter, setCounter]= useState(x)
 
    function handlechange (value){
        setCounter(counter+value)
    }
    return(
        <div>
 <span>Notebook:</span>
        <button className="addNotebook" onClick={()=>{handlechange(1)}}>
            +
        </button>
        <button className="remNotebook" onClick={()=>{handlechange(1)}}>
            -
        </button>
        <span className="totalNotebooks">{counter}</span>
        </div>
       
    )
}