import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [yearToShow, setYearToShow] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setYearToShow(selectedYear);
  }
  const list1 = props.expenses.filter(expense => {return expense.date.getFullYear().toString()===yearToShow});
  const reducer = (previousValue, currentValue) => previousValue+ currentValue;
  const list2 = list1.map((expense) => expense.amount);
  
  var total = 0
  if(list2.length !==0) {
     total = list2.reduce(reducer);
  }
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearToShow}
          onChangeFilter={filterChangeHandler}
          listToFilter = {props.expenses}
        ></ExpensesFilter>
        <ExpensesChart expenses={list1}></ExpensesChart>
        <ExpensesList myList = {list1} ></ExpensesList>
         <div className="expense-item__price">{"This Year You Spend: $" + total}</div>
      </Card>
    </li>
  );
}

export default Expenses;
