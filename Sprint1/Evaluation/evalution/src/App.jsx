import logo from './logo.svg';
import './App.css';
import {Pen} from "./components/Pen"
import {Book} from "./components/Book"
import{Inkpen} from "./components/Inkpen"
import{Notebook} from "./components/Notebook"
import {useState} from "react"
function App() {
 
let arr=[13,78,44,10]
//let a= JSON.parse(localStorage.getItem("number"));
//console.log(a)
 //arr[0]=a;
let x=arr.reduce((ac,dc)=>{return ac+dc})
//const [value, setValue]= useState("")
  return (
    <div className="items">
      <Book  no={arr[0]}/>
      <Inkpen no={arr[1]}/>
      <Notebook no={arr[2]}/>
      <Pen no={arr[3]}/>
      <div className="total">{x}</div>
    </div>
  );
}

export default App;
