import React from 'react';
import styled from  "styled-components";

const DateExpenses =styled.div`
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid #ececec;
    background-color: #2a2a2a;
    color: white;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`
const Month = styled.div`
    font-size: 0.75rem;
    font-weight: bold;
`
const Year =styled.div`
    font-size: 0.75rem;
`
const Day =styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`


const Date = ({date}) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US',{ day: '2-digit' } );
  const year = date.getFullYear();

  return (
   
   <DateExpenses>
     <Month>{month}</Month>
     <Year>{year}</Year>
      <Day>{day}</Day>
    </DateExpenses>
  );
};

export default Date;