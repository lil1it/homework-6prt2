import React, { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/button/Button";
import styled from "styled-components";

const Form = styled.div`
  width: 730px;
  border-radius: 15px;
  padding: 2rem;
  margin-right: 3rem;
  background: #ad9be9;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const NewExpense = ({ onNewExpenseShow }) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <Form>
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onNewExpenseShow={onNewExpenseShow}
        />
      ) : (
        <Button
          className="btn-add"
          title="Добавить новый расход"
          onClick={showExpenseForm}
        ></Button>
      )}
    </Form>
  );
};

export default NewExpense;
