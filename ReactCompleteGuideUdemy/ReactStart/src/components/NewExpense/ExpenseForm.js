import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    const [changedTitle,setChangedTitle] = useState('');
    const [changedAmount,setChangedAmount] = useState('');
    const [changedDate,setChangedDate] = useState('');

    const titleChangeHandler = (event) => {
        setChangedTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setChangedAmount(event.target.value);
    };
    
    const dateChangeHandler = (event) => {
        setChangedDate(event.target.value);
    };
    
    

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.1"  onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">지출 추가</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
