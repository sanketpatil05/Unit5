import { useState } from "react"


export function GroceryInput({fn}){
    const [text, settext] = useState("");

    return <div id="input-div">
        <input type="text" placeholder="Enter Gricery Name" onChange={
            (e)=> settext(e.target.value)} />
            
        <button onClick={()=>(
            fn(text)
        )}>ADD</button>
        
    </div>
}