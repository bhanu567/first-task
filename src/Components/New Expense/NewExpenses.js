import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(props) {

    const saveExpenseDataHandler = (newExpenseData) => {
        const newExpense = {
            ...newExpenseData,
            LocationOfExpenditure : "Wari",
        }
        props.onNewExpenseData(newExpense);
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}
export default NewExpenses;
