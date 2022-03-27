import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, deleteTodo} from '../Redux/todoReducer/action';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
export const Todos = () => {
const [text, settext] = useState("");
const dispatch = useDispatch();

const todos = useSelector((store) => store.todo.todo);
const token = useSelector((store) => store.login.token);
const navigate = useNavigate();
if(!token){
    navigate("/login")
}



function handleChange(e){
    settext(e.target.value);
}

const setData = ()=> {
    axios.post("http://localhost:8080/todos",{
        title : text,
        status:false
    }).then(getdata)
}

const getdata = ()=>{
    axios.get("http://localhost:8080/todos").then(res=>{
        dispatch(addTodo(res.data))
    })
}

useEffect(()=>{
    getdata();
},[])

function handleSubmit(){
   setData()
   
}
const handleDelete =(id)=>{
    dispatch(deleteTodo(id))
    axios.delete(`http://localhost:8080/todos/${id}`).then(getdata)
}
  return (
    <div>
      <h1>Todo Management</h1>
      <input type="text" placeholder="Add Todo" onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button><br />
 
    {todos.map((todo, index) => {return <div key={todo.id}>
   <Link to={`todos/${todo.id}`}>{todo.title}</Link>
    <button onClick={()=> handleDelete(todo.id)}>Delete</button><br />
    </div>})} 
    </div>
  )
}