import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseDataHandler(enterExpenseData) {
    const expenseDate = {
      id: Math.random().toString(),
      ...enterExpenseData,
    };
    props.onAddExpense(expenseDate);
  }
  function startEditing() {
    setIsEditing(true);
  }
  function returnToNormal(changeValue){
    setIsEditing(changeValue);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}> Add New Expenses </button>}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} AddNewExpensesButton={returnToNormal}></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
