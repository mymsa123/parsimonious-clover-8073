import { Button } from "@chakra-ui/react";
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
          <h5>First Name: {firstname}</h5>
    
          <h5>Last Name: {lastname}</h5>
        
          <h5>Gender: {gender} </h5>
            
          <h5>Appointment Date: {date} </h5>
    
          <h5>Appointment Time: {time}</h5>
          <Button  borderRadius={20} bgColor={"#00525D"} m={2}
          color={"white"} >Pay Now</Button>
        </div>
      );
    };
    
    export default FormData;
