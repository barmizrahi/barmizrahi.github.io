import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm(props) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterPrice, setEnterPrice] = useState(0);
  const [enterDate, setEnterDate] = useState("");
  function titleChangeHandler(event) {
    setEnterTitle(event.target.value);
  }

  function priceChangeHandler(event) {
    setEnterPrice(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnterDate(event.target.value);
  }

  function submitHendler(event) {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: parseInt(enterPrice),
      date: new Date(enterDate),
    };

    //console.log(expenseDate);
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterPrice(0);
    setEnterDate("");
    props.AddNewExpensesButton(false);
  }

  function cancelHandler(){
      props.AddNewExpensesButton(false);
  }
  return (
    <form onSubmit={submitHendler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterPrice}
            onChange={priceChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel"  onClick = {cancelHandler} >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
