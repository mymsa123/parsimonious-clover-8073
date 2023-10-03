import React from 'react'
import { Link } from "react-router-dom";
import { Button, VStack, Text } from "@chakra-ui/react";
const DoctorsCard = ({ id, name, image, category,
   description, fee
}) => {

   //const isAuth=useSelector((store)=>store.authReducer.isAuth)

   return (
      <VStack spacing={4} lineHeight={6} border={"5px solid orange"} p={10} m={5} borderRadius={50}
         bgColor={"#00525D"} boxShadow='2xl'>
         <img src={image} alt={"doctor"} style={{ width: "100%", borderRadius: "10%" }} />
         <Text fontSize='2xl' color="white">{name}</Text>
         <Text fontSize='2xl' color="white">{category}</Text>
         <Text fontSize='xl' color="white">{description}</Text>
         <Text fontSize='2xl' color="white">Fee: Rs {fee}</Text>
         {/* {isAuth && ()} */}
         <Button border={"2px solid black"} borderRadius={50} p={6}
            backgroundColor={'green'} color={"white"}>
            <Link to={"/book"} >Book Appointment</Link>
         </Button>

      </VStack>
   )
}

export default DoctorsCard


