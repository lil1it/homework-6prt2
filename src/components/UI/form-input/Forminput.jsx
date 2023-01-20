import React from "react";
import styled from "styled-components";

const CantainerInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20;
  margin-bottom: 10;
`;

const FormInput = styled.input`
    width: 340px;
    height: 39px;
    left: 730px;
    top: 296px;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    background: #FFFFFF;
    border-radius: 8px;
    border: 0;
`

const Forminput = ({ labelName, id, placeholder, inputtype, ...rest }) => {
  return (
    <CantainerInput>
      <label htmlFor={id}>{labelName}</label>
      <FormInput
        placeholder={placeholder || "..."}
        id={id}
        type={inputtype}
        {...rest}
      ></FormInput>
    </CantainerInput>
  );
};

export default Forminput;
