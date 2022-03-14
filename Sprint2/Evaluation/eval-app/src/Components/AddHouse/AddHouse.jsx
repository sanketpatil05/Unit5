import { useState } from "react";
const axios = require("axios");
export const AddHouse = ({fn, fn2}) => {
  const [hdata, setHdata] =useState([])
  const [formdata,setFormdata]=useState({
    name:"",
    ownerName:"",
    address:"",
    areaCode:"",
    rent:"",
    
  })
function handlechange(e){
//console.log(e.target.value);
  const {className, value, type, checked}=e.target; 
   if(type=="checkbox" && className=="bachelor"){
     if(checked){
      formdata.status="bachelor"
     }
     
   }
   else{
     if(checked){
      formdata.status="married"
     }
    
   }
  setFormdata({...formdata, [className]:value});
 console.log(formdata);
}
function handlesubmit(e){
  e.preventDefault();
  axios.post(" http://localhost:8080/houses", formdata).then(function(){
    alert("house added succesfully")
  })
    //setHdata(...hdata, formdata)
  fn(formdata)
  fn2()
  console.log(formdata);


}
   
  return (
    <div className="addHouseContainer">
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input type="text" className="name" required onChange={handlechange} />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" required onChange={handlechange} />
        <br />
        <label>address</label>
        <input  type="text" className="address" required onChange={handlechange}/>
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" required onChange={handlechange} />
        <br />
        <label>rent</label>
        <input  type="text" className="rent" required onChange={handlechange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={handlechange} />
        <br />
        <label>married</label>
        <input  type="checkbox" className="married" onChange={handlechange} />
        <br />
        <label>image</label>
        <input  type="text" className="image"  />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
