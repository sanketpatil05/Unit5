import { useState } from "react";
 import axios  from "axios";
 import {useSelector, useDispatch} from "react-redux"
 import { userLogin } from "../../Redux/Login/action";
 import {useNavigate} from "react-router-dom"
export const LoginSignUp = () => {
  const [data, setdata]= useState({})
  const [logdata, setLogdata]= useState({})
  const user=useSelector((store) =>store.login.user)
  const dispach= useDispatch();

  const navigate = useNavigate()
   console.log(user, "user")
 function handlechange(e){
   console.log("asdf")
   //console.log("oandf" ,e.target.value)
   const {value, className, checkbox}= e.target
    // if(checkbox=="checked"){
    //   console.log(e.target.value)
    // }
  setdata({
    ...data, 
    [className]: value
  })
 }


  function handlesubmit(e){
    e.preventDefault();
  //console.log("andf")
  setdata(data)
  console.log("he",data)

  axios.post("http://localhost:8080/users", data).then((res)=>{console.log(res.data)})


   
}

 function handlelogin(e){
   console.log(e.target.value)

   const {value, className, checkbox}= e.target
  setLogdata({
    ...logdata, 
    [className]: value
  })
 }
 function loginsubmit(e){
   e.preventDefault()
   setLogdata(logdata)
   dispach(userLogin(logdata))
   localStorage.setItem("userLoginDetails", JSON.stringify(logdata))
  console.log("helogin",logdata)
  navigate("/")
   
 }

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handlesubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={ handlechange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={handlechange}
          required
        />
        <br />
        <select value={""} className="location" onChange={handlechange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={handlechange}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={handlechange} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={handlechange} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={handlechange} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={handlechange} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={handlechange} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={handlechange}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={loginsubmit}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={handlelogin}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={handlelogin}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
