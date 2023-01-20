import React from "react";
import Date from "./Date";
import styled from "styled-components";

const ElemItems = styled.div`
  border: none;
  display: flex;
  justify-content: space-between;
  width: 748px;
  height: 104px;
  left: 346px;
  top: 814px;
  background: #4b4b4b;
  border-radius: 12px;
  align-items: center;
  margin-top: 1.5rem;
`;
const LeftSide = styled.div`
  margin-left: 2rem;
  display: flex;
`;
const TitleStyle = styled.p`
  margin-left: 2rem;
  color: white;
  display: flex;
  align-items: center;
`;

const PriceStyle = styled.p`
  color: white;
  border-radius: 10px;
  margin-right: 2rem;
  width: 4rem;
  height: 2.5rem;
  box-sizing: border-box;
  width: 112px;
  height: 44px;
  background: #40005d;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 10px;
  gap: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const ExpenseItem = ({ title, date, price }) => {
  return (
    <ElemItems>
      <LeftSide>
        <Date date={date} />
        <TitleStyle>{title}</TitleStyle>
      </LeftSide>
      <PriceStyle> $ {price}</PriceStyle>
    </ElemItems>
  );
};
