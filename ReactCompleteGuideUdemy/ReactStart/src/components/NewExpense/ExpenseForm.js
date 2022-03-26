import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [changedTitle, setChangedTitle] = useState("");
  const [changedAmount, setChangedAmount] = useState("");
  const [changedDate, setChangedDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setChangedTitle(event.target.value);
    // setUserInput({
    //   // userInput의 값을 불러오고 이후 원하는 부분만 교체
    //   ...userInput,
    //   enteredTitle : event.target.value

    // })
  };

  const amountChangeHandler = (event) => {
    setChangedAmount(event.target.value);
    // setUserInput({
    //   // userInput의 값을 불러오고 이후 원하는 부분만 교체
    //   ...userInput,
    //   enteredAmount : event.target.value

    // })
  };

  const dateChangeHandler = (event) => {
    setChangedDate(event.target.value);
    // setUserInput({
    //   // userInput의 값을 불러오고 이후 원하는 부분만 교체
    //   ...userInput,
    //   enteredDate : event.target.value

    // })
  };

  const submitHandler = (event) => {
    // 사이트의 새로 고침을 막아준다. SSA?
    event.preventDefault();
    const userData = {
      title: changedTitle,
      amount: changedAmount,
      date: new Date(changedDate),
    };
    // 상향식 컴포넌트 통신
    props.onSaveExpense(userData);
    // 양방향 바인딩 과정 위에서 데이터를 초기화 시켜줌
    setChangedTitle('');
    setChangedAmount('');
    setChangedDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={changedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={changedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={changedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">지출 추가</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
