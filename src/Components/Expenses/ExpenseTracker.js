import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


const ExpenseTracker = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.expensesData.date}></ExpenseDate>
      <ExpenseDetails
        title={props.expensesData.title}
        LocationOfExpenditure={props.expensesData.LocationOfExpenditure}
        amount={props.expensesData.amount}
      ></ExpenseDetails>
    </Card>
  );
}

export default ExpenseTracker;
