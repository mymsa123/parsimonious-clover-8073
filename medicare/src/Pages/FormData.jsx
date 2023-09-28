import React from "react";

const FormData = ({
    firstname,
    lastname,
    email,
    gender,
    date,
    time,
}) => {
      return (
        <div >
          <h3>First Name: {firstname}</h3>
    
          <h3>Last Name: {lastname}</h3>
    
          <h3>Email: {email} </h3>
        
          <h3>Gender: {gender} </h3>
            
          <h3>Appointment Date: {date} </h3>
    
          <h3>Appointment Time: {time}</h3>
        </div>
      );
    };
    
    export default FormData;