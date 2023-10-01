import React from 'react'
import { Link } from "react-router-dom";
import {Button, VStack,Text} from "@chakra-ui/react";
const DoctorsCard = ({id,name, image,category,
    description,fee
}) => {

//const isAuth=useSelector((store)=>store.authReducer.isAuth)
    
      return (
      <VStack spacing={4} lineHeight={6}  border={"2px solid black"} p={10} m={5} 
      bgGradient="linear(to-t, pink.200, cyan.200)" boxShadow='2xl'>
       <img src={image} alt={"doctor"} style={{width:"100%", borderRadius:"10%"}}/> 
       <Text fontSize='2xl' color="black">{name}</Text>
       <Text fontSize='2xl' color="black">{category}</Text>
       <Text fontSize='xl' color="black">{description}</Text>
       <Text fontSize='2xl' color="black">Fee: {fee}</Text>
       {/* {isAuth && ()} */}
       <Button border={"2px solid black"} borderRadius={50} p={6}
       backgroundColor={'green'} color={"white"}>
          <Link to={"/book"} >Book Appointment</Link>
       </Button>
    
    </VStack>
      )
}

export default DoctorsCard


