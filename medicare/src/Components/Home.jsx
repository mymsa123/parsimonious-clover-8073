import React from 'react'
import { Box, VStack, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <VStack>
      <Box width="100%">
        <img src="/Images/Home.png" alt="Home" width="100%" />
      </Box>
      <VStack spacing={1} w={"70%"} m={4}>
        <h5>Best-In-Class</h5>
        <Text fontSize="6xl" color={"#00525D"}>HealthCare Services</Text>
        <Text fontSize="xl" color={"#00525D"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptates 
        animi distinctio ea voluptatum dolorum dignissimos autem, accusantium iste facilis.</Text>
      </VStack>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "15px", width:"80%", 
      margin:"5px", marginBottom:"20px"}}>
        <VStack border={"2px solid black"} pt={8} pb={8}>

          <img src="/Images/consultancy.png" alt="home" />
          <Text fontSize="2xl">Online Consultancy</Text>

        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8}>

          <img src="/Images/Hospital.png" alt="home" />
          <Text fontSize="2xl">Hospital</Text>

        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8}>

          <img src="/Images/Medicine.png" alt="home" />
          <Text fontSize="2xl">Medicines</Text>

        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8}>

          <img src="/Images/test.png" alt="home" />
          <Text fontSize="2xl">Tests</Text>

        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8}>

          <img src="/Images/nurding.png" alt="home" />
          <Text fontSize="2xl">Nursing</Text>

        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8}>

          <img src="/Images/emergency.png" alt="home" />
          <Text fontSize="2xl">Emergency</Text>

        </VStack>
      </div>
      <Box width={"100%"} m={8}>
        <img src="/Images/data.png" alt="data" width="100%"/>
      </Box>
    </VStack>
  )
}
