import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 8, 15) },
    { title: "Toilet Paper", amount: 4.67, date: new Date(2022, 8, 15) },
    { title: "Washing Machine", amount: 94.67, date: new Date(2022, 8, 15) },
  ];
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
