import React from "react";
import styled from "styled-components";

const ChartBarStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: 0.8s ease-out;
`;

const BarLabel = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

const ChartBar = ({ maximumPrice, currentPrice, label }) => {
  const fillHeigt = (100 * currentPrice) / maximumPrice;
  return (
    <ChartBarStyle>
      <ChartInner>
        <BarFill style={{ height: `${fillHeigt}%` }}></BarFill>
      </ChartInner>
      <BarLabel>{label}</BarLabel>
    </ChartBarStyle>
  );
};

export default ChartBar;
