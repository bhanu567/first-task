import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

//   const [userInput, setUserInput] = useState({
//     enteredtitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredtitle : event.target.value,
    // }) but this is not the very correct way as your current element states depends on other elements state so may be it will binded together by the react, and that may lead to the wrong value, so, the very correct way of doing it is
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredtitle: event.target.value,
    //   };
    // });
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    const newExpenseData ={
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate),
    };
    // console.log(newExpenseData);
    props.onSaveExpenseData(newExpenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancel}  >Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};




export default ExpenseForm;
