import React, { useState } from "react";
import Button from "../UI/button/Button";
import Forminput from "../UI/form-input/Forminput";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const BtnForms = styled.div`
  margin-right: -1rem;
  margin-top: 2rem;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 50px;
`;

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const disable = title.length > 0 && price.length > 0 && date.length > 0;
  const cancelHandler = (e) => {
    e.preventDefualt();
    props.onShowForm();
  };
  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceInputChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      price,
      date,
    };
    props.onNewExpenseShow(expenseData);

    setTitle("");
    setDate("");
    setPrice("");
  };

  return (
    <FormContainer>
      <Forminput
        id="name"
        labelName="Заголовок"
        inputtype="text"
        placeholder="Введите название"
        value={title}
        onChange={titleInputChangeHandler}
      />
      <Forminput
        id="name"
        labelName="Количество"
        inputtype="number"
        value={price}
        onChange={priceInputChangeHandler}
      />
      <Forminput
        id="name"
        labelName="Датировать"
        inputtype="Date"
        placeholder="дд.мм.гггг"
        value={date}
        onChange={dateInputChangeHandler}
      />

      <BtnForms>
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Сохранить" onClick={saveHandler} disabled={!disable} />
      </BtnForms>
    </FormContainer>
  );
};

// export const ExpenseForm = (props) =>{

// }
