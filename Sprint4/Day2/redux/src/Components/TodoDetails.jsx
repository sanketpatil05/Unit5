import axios from "axios";
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom"

export function TodoDetails (){
    const {id} = useParams();
    const [data, setdata] = useState({});
    const getdata = ()=>{
        axios.get(`http://localhost:8080/todos/${id}`).then(res=>{
            setdata(res.data)
        })
    }
     useEffect(()=>{
        getdata();
     },[])
     console.log(data)
     function handleFunc(id){
         if(data.status===false){
                axios.patch(`http://localhost:8080/todos/${id}`,{
                    status:true,
                    // title:data.title
                }).then(getdata)
         }
         else{
                axios.patch(`http://localhost:8080/todos/${id}`,{
                    status:false,
                    // title:data.title
                }).then(getdata)
         }
    }

    return (
        <div>
            <h1>Todo Details</h1>
            <div id="flex">
               <div> <h2>{data.title}</h2></div>
               <div>{data.status ? <h3>Completed</h3> : <h3>Pending</h3>}
               <button onClick={()=>handleFunc(data.id)}>toggle</button>
               </div>
            </div>
        </div>
    )
}