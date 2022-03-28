import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    // 상향식 컴포넌트 통신
    //
    const addExpenseHandler = (EnteredexpenseData) =>{
        const expenseData = {
            ...EnteredexpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    };
    
    const stopEditingHandler = () =>  {
        setIsEditing(false)
    };
    return (
        <div className="new-expense">
            {/* 조건부 렌더링 과정 */}
            {!isEditing && <button onClick={startEditingHandler}>지출 내용 추가</button>}
            {/* 상향식 컴포넌트 통신 */}
            {isEditing && <ExpenseForm onSaveExpense={addExpenseHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};

export default NewExpense;