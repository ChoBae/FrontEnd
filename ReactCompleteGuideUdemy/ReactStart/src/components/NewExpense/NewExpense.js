import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    // 상향식 컴포넌트 통신
    const addExpenseHandler = (EnteredexpenseData) =>{
        const expenseData = {
            ...EnteredexpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    };

    return (
        <div className="new-expense">
            {/* 상향식 컴포넌트 통신 */}
            <ExpenseForm onSaveExpense={addExpenseHandler}/>
        </div>
    );
};

export default NewExpense;