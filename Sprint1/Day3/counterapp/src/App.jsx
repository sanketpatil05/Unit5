import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter'
function App() {
  return (
      
     
    <div className="App">
      
      {/* <input type="text" placeholder="Entre the value" id="id"/>
      <button onClick={()=>{
        var  x=document.getElementById("id").value;
         console.log(x)
      }}>Submit</button> */}
       
     <Counter  />
    </div>
  );
}

export default App;
