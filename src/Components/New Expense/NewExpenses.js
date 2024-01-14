import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(props) {
  const [renderNewExpense, setRenderNewExpense] = useState(false);
  const saveExpenseDataHandler = (newExpenseData) => {
      const newExpense = {
        ...newExpenseData,
        LocationOfExpenditure: "Wari",
        id: "e6",
      };
      props.onNewExpenseData(newExpense);
      setRenderNewExpense(false);
  };
  const clickHandler = () => {
    setRenderNewExpense(true);
  };

  const cancelHandler = () => {
    setRenderNewExpense(true);
  };

  return (
    <div className="new-expense">
      {renderNewExpense && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={cancelHandler}/>
      )}
      {!renderNewExpense && <button onClick={clickHandler}>Add Expenses</button>}
    </div>
  );
}
export default NewExpenses;
