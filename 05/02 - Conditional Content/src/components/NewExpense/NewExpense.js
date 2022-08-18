import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseFormBefore from "./ExpenseFormBefore";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div>
      <ExpenseFormBefore onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
