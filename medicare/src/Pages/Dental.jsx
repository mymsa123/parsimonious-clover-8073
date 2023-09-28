import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {styled} from "styled-components";
import { DoctorCard } from './DoctorCard';

export const Dental = () => {
    const dispatch=useDispatch();
    const dental = useSelector(store => store.doctorReducer.dental);
    
    useEffect(()=>{
        dispatch(getDental);
    }, [])
    
    
      return (
        <DIV>
        {dental.length>0 && dental.map((el)=>{
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

