import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  // 필터 년도 state 기본값 '2020' 설정
  const [filteredYear, setFiteredYear] = useState("2020");
  // state 끌어오기
  const dropDownHandler = (selectedYears) => {
    setFiteredYear(selectedYears);
  };
  // 선택한 연도의 비용지출 필터링
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    // jsx 스니펫으로 컴포넌트를 묶어준다. -> lean
    <Card className="expenses">
      {/* state 끌어오기 */}
      <ExpenseFilter selected={filteredYear} onSaveDropDown={dropDownHandler} />
      {/* 차트 컴포넌트 */}
      <ExpenseChart expenses={filteredExpenses} />
      {/* 해당연도 비용 리스트 생성, 파라미터값으로 해당연도의 비용 리스트를 보내줌 */}
      {<ExpenseList items={filteredExpenses} />}
    </Card>
  );
};
export default Expenses;
