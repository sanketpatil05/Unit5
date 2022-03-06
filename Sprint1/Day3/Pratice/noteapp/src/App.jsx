import {Note} from './components/Note'
import './App.css';
import {useState} from "react"
let arr=[];

function objfunction(a,b,c){
  this.title=a;
  this.date=b;
  this.data=c;
}
function App() {
  // const [da, setDa]= useState([arr]);
  const [state, setState] = useState([...arr])

  function myfun(){
    let title = document.getElementById("title").value;
    let data=document.getElementById("data").value;
    let date= document.getElementById("date").value;


    let obj= new objfunction(title, date,data);
      arr.push(obj);
     // console.log(arr);
     //setDa(arr)
     setState([...arr]);
  }
  return (
    <div className="App">
     <h1>Wirte Note</h1>
      <input type="text" placeholder="Enter you note here" id="title"/>
      <input type="date" id="date"/>
      <textarea   cols="30" rows="10" id="data"></textarea>
      <button onClick={myfun}>Submit</button>
      <div id="container">
      { state.map(ele=><Note  value={ele}/>)}
      
      </div>
    </div>
  );
}

export default App;
