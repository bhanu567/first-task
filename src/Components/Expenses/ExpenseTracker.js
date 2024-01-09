import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


const ExpenseTracker = (props) => {
  const clickHandler = (e) => {
    e.target.parentElement.remove();
  }
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.expensesData.date}></ExpenseDate>
      <ExpenseDetails
        title={props.expensesData.title}
        LocationOfExpenditure={props.expensesData.LocationOfExpenditure}
        amount={props.expensesData.amount}
      ></ExpenseDetails>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseTracker;
