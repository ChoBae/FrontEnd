import React from 'react';
import './ExpenseFilter.css';
// 연도별 필터 컴포넌트
const ExpenseFilter = (props) => {
    const dropDownChangeHandler = (event) =>    {
        // state 끌어올림
        props.onSaveDropDown(event.target.value);
    };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/*props.selected은 부모 컴포넌트에서 내가 설정한 값을 받아오고,
        onChange는 변화가 있을때 state를 끌어올린다. */}
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;