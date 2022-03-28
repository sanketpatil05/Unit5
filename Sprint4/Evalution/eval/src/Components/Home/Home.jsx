import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

export const Home = () => {
    const [events, setEvents] = useState([]);
   const [show, setShow] = useState(false)
   const user= useSelector((store) =>store.login.user)
   // user==null?setShow(false):setShow(true)
   console.log("userhome", user)
    
  useEffect(()=>{
      getevents()
  }, [])
  
  function getevents() {
  axios.get("http://localhost:8080/meetups").then((res)=>{console.log(res.data)
    setEvents(res.data)
})
   
  }
  
  return (

    
    <div className="homeContainer">
      {
       // .filter((el) => { }) // Filter on the basis of Users interests and location (both true)
       events.map((el) => {
          return (
            <Link to={`/event/${el.id}`} className="events" key={el.id}>
           {/* add your children here (divs)
           ex : title, theme, description, date, time, location, image(optional)
           the classNames should be also : title, theme, description, date, time, location, image(optional)
          */
             <div >
                 <h3 className="title">{el.title}</h3>
           <h3 className="theme">{el.theme}</h3>
           <h3 className="description">{el.description}</h3>
           <span className="date">{el.date}</span>
           <span className="time">{el.time}</span>
           <span className="location">{el.location}</span>
           <img src={el.image } className="image" />
   
             </div>
          }
         </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={"/addmeetup"}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={""} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */
                   
                    }
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
