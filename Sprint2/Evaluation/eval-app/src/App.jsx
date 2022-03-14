import "./App.css";
import { useState ,useEffect} from "react";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
const axios = require("axios");
function App() {

  const [hdata, setHdata] =useState([]);
  function get(data){
    console.log("here", data)
  }
  useEffect(()=>{
    getdata()
  },[])
  function getdata(){
    axios.get("http://localhost:8080/houses").then(function(response){
      console.log(response.data)

      setHdata(response.data);
    })
  }
   const[show, setShow]=useState(false)
  return (
    <div className="App">
      <AddHouse fn={get} fn2={getdata}/>
      <Rentals data={hdata} />
      <button className="toggleForm">
        {show?"Add House":"hide"}
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
