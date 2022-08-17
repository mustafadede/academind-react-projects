import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 8, 15) },
    { title: "Toilet Paper", amount: 4.67, date: new Date(2022, 8, 15) },
    { title: "Washing Machine", amount: 94.67, date: new Date(2022, 8, 15) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
