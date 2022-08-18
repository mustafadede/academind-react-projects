import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const ExpenseFormBefore = (props) => {
  const [click, setClick] = useState(false);

  const addFormComponent = () => {
    setClick(true);
  };

  const cancelTheForm = () => {
    setClick(false);
  };
  return (
    <div className="new-expense">
      {!click && <button onClick={addFormComponent}>Add New Expense</button>}
      {click && (
        <ExpenseForm
          cancelTheForm={cancelTheForm}
          onSaveExpenseData={props.onSaveExpenseData}
        />
      )}
    </div>
  );
};

export default ExpenseFormBefore;
