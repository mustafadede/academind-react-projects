import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredDate, setFilteredDate] = useState("2020");
  const addDateFilter = (event) => {
    setFilteredDate(event);
    console.log(event);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredDate} onDateFilter={addDateFilter} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
