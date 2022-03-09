import { useState, useEffect } from "react";
import { GroceryInput } from "./GroceryInput";
import { Groce } from "./GroceryList";
import { nanoid } from 'nanoid'
const axios =require('axios');


export function Grocery(){
    const[list, setList] = useState([])
    const [page, setPage] = useState(1)

     useEffect(()=>{
         axios.get(`http://localhost:3001/grocery?_limit=3&_page=${page}`).then(function(response){
             console.log(response.data)
             setList(response.data)
         }).catch(function(er){
             console.log(er)
         })
     },[page])
    const getdata = (data)=>{
        const listAll = {
            title : data,
            status:false,
            id:nanoid() 
        }
        //console.log('listAll: ', listAll);
        setList([...list,listAll]) // [1,2,3,4,5]
axios.post("http://localhost:3001/grocery", listAll).then(function(response){
    console.log('response: ', response.data)
}).catch(function(er){
    console.log('error: ', er)
})
    }



    function deleteitem(id){
      const x=  list.filter((ele)=>{
           return ele.id!==id
        })
    setList(x)
    }
 const  handlechange=(v)=>{
     
     if(page+v>0){
        setPage(page+v)
     }
   }

    return (
        <div id="parent_for_all">
            <GroceryInput fn = {getdata}/>
            {list.map((e)=>(<Groce List={e} key = {e.id} deleteitem={deleteitem} />))}
            <button onClick={()=>{
                handlechange(1)
            }}>Next</button>
            <button onClick={()=>{
                handlechange(-1)
            }}>Prev</button>
        </div>
    )
}