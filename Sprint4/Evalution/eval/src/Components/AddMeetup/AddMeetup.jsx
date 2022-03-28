// User should be able to add/create new meetups 
import { useState } from "react";
import axios from "axios"
export const AddMeetup = () => {


   const [data, setdata]= useState({})
  function handleSubmit(e){
    e.preventDefault()
    //console.log("heorn",data)
    setdata(data)
    axios.post("http://localhost:8080/meetups", data).then((res)=>{console.log("data", res.data)})
      // console.log(data)
  }
  function handlechange(e){
   
     const {value, className}= e.target

       setdata({
         ...data, 
         [className]: value
       })

       
  }
  return (
    <div className="addMeetupContainer">
      <form onSubmit={handleSubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" onChange={handlechange} required />
        <label>Location</label>
        <select value={""} className="location" onChange={handlechange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={handlechange}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          onChange={handlechange}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={""} className="theme" onChange={handlechange}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          onChange={handlechange}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          onChange={handlechange}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
