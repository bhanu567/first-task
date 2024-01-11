import react, {useState} from "react";

import ExpenseTracker from "./ExpenseTracker";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredExpenses, setFilteredExpenses ] =useState(props.items);
  const filterChangeHandler = selectedYear => {
    const filtered = props.items.filter(expenses => {
      if (expenses.date.getFullYear()===Number(selectedYear)) {
        return props.items;
      }
    });
    setFilteredYear(selectedYear);
    setFilteredExpenses(filtered)
  };

  return (
    <>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((datas) => (<ExpenseTracker key={datas.id} expensesData={datas} />))}

      {/* <ExpenseTracker expensesData={props.items[0]}/>
        <ExpenseTracker expensesData={props.items[1]}/>
        <ExpenseTracker expensesData={props.items[2]}/>
        <ExpenseTracker expensesData={props.items[3]}/>
        <ExpenseTracker expensesData={props.items[4]}/> */}
    </>
  );
}
export default Expenses;
