import React from "react";
import styled from "styled-components";

const Buttonstyle = styled.button`
  background-color: rgb(95, 25, 161);
  color: white;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 18px;
  gap: 10px;
  background: #4a026b;
  border-radius: 10px;
`;

const Button = (props) => {
  return (
    <Buttonstyle onClick={props.onClick} disabled={props.disabled}>
      {props.title}
    </Buttonstyle>
  );
};

export default Button;
