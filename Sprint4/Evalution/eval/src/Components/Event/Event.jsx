// This is an event details page which has its own route
import {useParams} from "react-router-dom"
import{useEffect, useState} from "react"
import axios from "axios"
export const Event = () => {
const {id}= useParams()
 const [data, setData]= useState({})
 //console.log(id)


  useEffect(()=>{
     getevent()
  },[id])

  function getevent() {
    axios.get(`http://localhost:8080/meetups/${id}`).then((res)=>{console.log(res.data)
      setData(res.data)
  })
     
    }
 const  handlesub =(v)=>{
  console.log("sld", v)
  }
  return (
    <div className="eventContainer">
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)

      
      */}
        <h3 className="title">{data.title}</h3>
        <h3 className="theme">{data.theme}</h3>
        <h3 className="description">{data.description}</h3>
        <span className="date">{data.date}</span>
        <span className="time">{data.time}</span>
        <span className="location">{data.location}</span>
        <img src={data.image } className="image" />

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      <button className="unsubscribe" onClick={()=>{
        handlesub(-1)
      }}>Unsubscribe</button>
      <button className="subscribe" onClick={()=>{
        handlesub(1)
      }}>Subscribe</button>
    </div>
  );
};
