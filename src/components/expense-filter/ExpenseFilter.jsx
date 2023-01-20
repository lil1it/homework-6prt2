import React from "react";
import styled from "styled-components";

const FilterStyle = styled.div`
  color: white;
  padding: 0 1rem;
`;
const FilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;
const Select = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

const ExpenseFilter = ({ value, onChange }) => {
  return (
    <FilterStyle>
      <FilterControl>
        <label>Фильтр по году</label>
        <Select value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </Select>
      </FilterControl>
    </FilterStyle>
  );
};

export default ExpenseFilter;
