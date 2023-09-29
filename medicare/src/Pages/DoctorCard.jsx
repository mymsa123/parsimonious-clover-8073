import React from 'react'
import { Link } from "react-router-dom";

export const DoctorCard = ({id,name, image,
    description,fee
}) => {
  return (
    <div>
       <img src={image} alt={"Physician"} style={{width:"100%"}}/> 
       <h1>{name}</h1>
       <p>{description}</p>
       <h3>Fee: {fee}</h3>
       <button>
          <Link to={"/book"}>Book Appointment</Link>
        </button>
    </div>
  )
}
