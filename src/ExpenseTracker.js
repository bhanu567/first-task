import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseTracker(props) {
  return (
    <div className="expense-item">
      <ExpenseDate Date={props.expensesData.date}></ExpenseDate>
      <ExpenseDetails
        title={props.expensesData.title}
        LocationOfExpenditure={props.expensesData.LocationOfExpenditure}
        amount={props.expensesData.amount}
      ></ExpenseDetails>
    </div>
  );
}

export default ExpenseTracker;
