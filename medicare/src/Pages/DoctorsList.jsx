import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getDoctor} from "../Redux/doctors/action"
import {styled} from "styled-components";
import DoctorsCard from "./DoctorsCard";
import { useSearchParams } from "react-router-dom";
import {VStack, Flex,Text} from "@chakra-ui/react";

const DoctorsList = () => {
    const dispatch=useDispatch();
    const [searchParams,setSearchParams]=useSearchParams(); 
    const [category, setCategory] = useState(searchParams.getAll("category") || []);
    const doctors = useSelector(store => store.doctorsReducer.doctors);
 
    
const handleCategory=(e)=>{
const {value} = e.target;
let newCategory=[...category];

if(newCategory.includes(value)){
  newCategory = newCategory.filter((el) => el !== value)
}else{
    newCategory.push(value);
}
setCategory(newCategory);

};

useEffect(()=>{
  let params={
    category: category,
};

const paramObj = {
      params:{
        category: searchParams.getAll("category"),
      },
};
setSearchParams(params);
    dispatch(getDoctor(paramObj));
}, [category,searchParams])

  return (
  <div>
    <VStack>
     <VStack bgColor={"cyan.200"} width="100%" m={0} p={5}>
        <Text fontSize='4xl' bgGradient='linear(to-l, #0fe85b, #f0365b)' bgClip='text'
           fontWeight='extrabold'>Say Hello👋!</Text>
        <Text fontSize='4xl' bgGradient='linear(to-l, #f114af, #5176d5)' bgClip='text'
           fontWeight='extrabold'>To a new era of healthcare</Text>
        <Text fontSize='2xl' bgGradient='linear(to-l, #e8540f, #0ca03f)' bgClip='text'
           fontWeight='extrabold'>Now Book an Appointment to consult a specialist doctor online, anytime, anywhere</Text>
      </VStack>
      <VStack width="100%"  spacing={4}
      m={0} p={5}>
        <Text fontSize='2xl' color="black">Filter By Category-</Text>
          <Flex gap={10}>
          <div>
            <input type="checkbox" value={"General Physician"}
            onChange={handleCategory} checked={category.includes("General Physician")}/>
            <label >General Physician</label>
        </div>
        <div>
            <input type="checkbox" value={"Cardiologist"} 
                onChange={handleCategory} checked={category.includes("Cardiologist")}
            />
            <label >Cardiologist</label>
        </div>
        <div>
            <input type="checkbox" value={"Dentist"} 
                onChange={handleCategory} checked={category.includes("Dentist")}
            />
            <label >Dentist</label>
        </div>
        <div>
            <input type="checkbox" value={"Dermatologist"} 
                onChange={handleCategory} checked={category.includes("Dermatologist")}
            />
            <label >Dermatologist</label>
        </div>
        <div>
            <input type="checkbox" value={"Physiotherapist"} 
                onChange={handleCategory} checked={category.includes("Physiotherapist")}
            />
            <label >Physiotherapist</label>
        </div>
        </Flex>
      </VStack>
        <DIV>
        {doctors.length>0 && doctors.map((el)=>{
            return <DoctorsCard key={el.id} {...el}/>
          })}
        </DIV>
    </VStack>
   </div>
  )
}

export default DoctorsList;

const DIV = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
gap:10px;
background-color:white;
`;