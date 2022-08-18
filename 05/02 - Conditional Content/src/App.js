import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 8, 15),
  },
  { id: "2", title: "Toilet Paper", amount: 4.67, date: new Date(2022, 8, 15) },
  {
    id: "3",
    title: "Washing Machine",
    amount: 94.67,
    date: new Date(2022, 8, 15),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
