import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { Groce } from "./GroceryList";
import { nanoid } from 'nanoid'


export function Grocery(){
    const[list, setList] = useState([])

    const getdata = (data)=>{
        const listAll = {
            title : data,
            status:false,
            id:nanoid() 
        }
        //console.log('listAll: ', listAll);
        setList([...list,listAll]) // [1,2,3,4,5]

    }

    function deleteitem(id){
      const x=  list.filter((ele)=>{
           return ele.id!==id
        })
    setList(x)
    }
   

    return (
        <div id="parent_for_all">
            <GroceryInput fn = {getdata}/>
            {list.map((e)=>(<Groce List={e} key = {e.id} deleteitem={deleteitem} />))}
        </div>
    )
}