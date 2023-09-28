import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {styled} from "styled-components";
import { DoctorCard } from './DoctorCard';

export const Dermatology = () => {
    const dispatch=useDispatch();
    const dermatologist = useSelector(store => store.doctorReducer.dermatologist);
    
    useEffect(()=>{
        dispatch(getDermatologist);
    }, [])
    
    
      return (
        <DIV>
        {dermatologist.length>0 && dermatologist.map((el)=>{
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
