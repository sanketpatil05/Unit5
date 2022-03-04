import { useState } from "react";
export function Counter() {
    const [Counter, setCounter] =useState(0);
 //console.log(props.value)
    function handlechange(value) {
       if(value ===2){
           setCounter(Counter*2)
       }
       else{
        setCounter(Counter+value)
       }
       
    }
    return <div>
        <h3>Counter:{Counter}</h3>
        <button onClick={()=>{
            handlechange(1)
        }}>
            ADD
        </button>
        <button onClick={()=>{
            if(Counter<=0){
                 handlechange(0)
            }
            else{

                handlechange(-1)
            }
        }}>
            Less
        </button>
        <button onClick={()=>{
            handlechange(2)
        }}>
            Double
        </button>
    </div>
}