import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  // 프롭스 값
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  // 상향식 컴포넌트 통신
  const addExpenseHandler = (expense) => {
    console.log('In app.js')
    console.log(expense)
  };
  return (
    <div>
      {/* 상향식 컴포넌트 통신 */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
