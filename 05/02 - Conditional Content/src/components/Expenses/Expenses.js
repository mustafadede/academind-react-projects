import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredDate, setFilteredDate] = useState("2020");

  const addDateFilter = (event) => {
    setFilteredDate(event);
    console.log(event);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredDate;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredDate} onDateFilter={addDateFilter} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
