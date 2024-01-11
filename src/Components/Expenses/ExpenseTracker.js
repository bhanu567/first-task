import react, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


const ExpenseTracker = (props) => {
  const [amount, setAmount] = useState(props.expensesData.amount);
  const clickHandler2 = (e) => {
    setAmount("100");
  }
  // const clickHandler2 = (e) => {
  //   console.log(e.target);
  //   e.target.parentElement.innerHTML = "100";
  // }
  const [title, setTitle] = useState(props.expensesData.title);
  const clickHandler1 = (e) => {
    setTitle("Updated!");
  }
  // const clickHandler1 = (e) => {
  //   e.target.parentElement.innerHTML = "Updated!";
  //   console.log(e.target);
  // }

  const clickHandler3 = (e) => {
    e.target.parentElement.remove();
  }


  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.expensesData.date}></ExpenseDate>
      <ExpenseDetails
        key = {props.expensesData.id}
        title={title}
        LocationOfExpenditure={props.expensesData.LocationOfExpenditure}
        amount={amount}
      ></ExpenseDetails>
      <button onClick={clickHandler1}>Edit Expense Details</button>
      <button onClick={clickHandler2}>Edit Expense Cost</button>
      <button onClick={clickHandler3}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseTracker;
