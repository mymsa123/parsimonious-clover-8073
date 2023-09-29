import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {styled} from "styled-components";
import { DoctorCard } from './DoctorCard';


export const Physician = () => {
const dispatch=useDispatch();
const physicians = useSelector(store => store.doctorReducer.physicians);

useEffect(()=>{
    dispatch(getPhysician);
}, [])


  return (
    <DIV>
    {physicians.length>0 && physicians.map((el)=>{
        return <DoctorCard key={el.id} {...el}/>
      })}
    </DIV>
  )
}
 
const DIV = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
gap:10px;
`;