import React, { useState } from "react";
import Chart from "../chart/Chart";
import ExpenseFilter from "../expense-filter/ExpenseFilter";
import { ExpenseItem } from "../expense.item/ExpenseItem";
import styled from "styled-components";


const Expenses = ({ expense }) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItems = expense.filter((elem) => {
    const stringifiedYear = new Date(elem.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });

  return (
    <List>
      <ExpenseFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems} />

      {filteredItems.map((elem) => {
        return (
          <ExpenseItem
            key={elem.id + new Date().getTime}
            title={elem.title}
            date={new Date(elem.date)}
            price={elem.price}
          />
        );
      })}
    </List>
  );
};

export default Expenses;


const List = styled.ul`
   padding: 10px;
  border: 3px solid #1F1F1F;
   border-radius: 20px;
   margin-top: 20px;
   margin-bottom: 30px;
   background: #1f1f1f;
`
