import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const Consultancy = () => {
  return (
    <div>
        <Text>Say Hello!</Text>
        <Text>To a new era of healthcare.</Text>
        <Text>Now Book an Appointment to consult a specialist doctor online, anytime, anywhere.</Text>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"10px"}}>
          <VStack border={"1px solid black"}>
          <Link >
             <img src="https://views.medibuddy.in/offlineconsults/general_physician.png" alt="Physician" />
            <Text>General Physician</Text>
          </Link>
          </VStack>

          <VStack border={"1px solid black"}>
          <Link>
            <img src="https://views.medibuddy.in/offlineconsults/Dental.png" alt="Dental" />
            <Text>Dental</Text>
          </Link>
          </VStack>

          <VStack border={"1px solid black"}>
          <Link>
            <img src="https://views.medibuddy.in/offlineconsults/skin_problems.png" alt="Skin" />
            <Text>Dermatology</Text>
          </Link>
          </VStack>

          <VStack border={"1px solid black"}>
          <Link>
            <img src="https://views.medibuddy.in/offlineconsults/cardiac_issues.png" alt="Heart" />
            <Text>Cardiology</Text>
          </Link>
          </VStack>

          <VStack border={"1px solid black"}>
          <Link>
            <img src="https://views.medibuddy.in/offlineconsults/pain_management.jpeg" alt="Pain" />
            <Text>Physiotherapist</Text>
          </Link>
          </VStack>
          
        </div>
    </div>
  )
}

export default Consultancy