import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card"
import "./Expenses.css"

const Expenses = (props) => {
  // 필터 년도 state 기본값 '2020' 설정
  const [filteredYear, setFiteredYear] = useState("2020");
  // state 끌어오기
  const dropDownHandler = (selectedYears) => {
    setFiteredYear(selectedYears);
  };
  return (
    <Card className="expenses">
      {/* state 끌어오기 */}
      <ExpenseFilter selected={filteredYear} onSaveDropDown={dropDownHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses;
