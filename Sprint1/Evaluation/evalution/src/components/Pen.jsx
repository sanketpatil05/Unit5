import {useState} from "react"
export function Pen(props){
     let x=props.no
    const [counter, setCounter]= useState(x)
 

    function handlechange (value){
        setCounter(counter+value) 
     localStorage.setItem("number",JSON.stringify(counter+value))
     
    }
    return(
        <div>
 <span>Pens:</span>
        <button className="addPen" onClick={()=>{handlechange(1)}}>
            +
        </button>
        <button className="remPen" onClick={()=>{handlechange(1)}}>
            -
        </button>
        <span className="totalPens">{counter}</span>
        
        </div>
       
    )
}