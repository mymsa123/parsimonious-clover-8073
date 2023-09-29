import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {styled} from "styled-components";
import { DoctorCard } from './DoctorCard';

export const Cardio = () => {
    const dispatch=useDispatch();
    const cardios = useSelector(store => store.doctorReducer.cardios);
    
    useEffect(()=>{
        dispatch(getCardio);
    }, [])
    
    
      return (
        <DIV>
        {cardios.length>0 && cardios.map((el)=>{
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
