import ExpenseTracker from "./ExpenseTracker";
const Expenses = (props) => {
  return (
    <>
      {props.items.map((datas) => (<ExpenseTracker expensesData={datas} />))}

      {/* <ExpenseTracker expensesData={props.items[0]}/>
        <ExpenseTracker expensesData={props.items[1]}/>
        <ExpenseTracker expensesData={props.items[2]}/>
        <ExpenseTracker expensesData={props.items[3]}/>
        <ExpenseTracker expensesData={props.items[4]}/> */}
    </>
  );
}
export default Expenses;
