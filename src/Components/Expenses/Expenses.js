import react, {useState} from "react";

import ExpenseTracker from "./ExpenseTracker";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {Array.isArray(props.items)  ? props.items.map((datas) => (<ExpenseTracker expensesData={datas} />)):"Jai Hind"}

      {/* <ExpenseTracker expensesData={props.items[0]}/>
        <ExpenseTracker expensesData={props.items[1]}/>
        <ExpenseTracker expensesData={props.items[2]}/>
        <ExpenseTracker expensesData={props.items[3]}/>
        <ExpenseTracker expensesData={props.items[4]}/> */}
    </>
  );
}
export default Expenses;
