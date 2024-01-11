import react, { useState } from "react";

import ExpenseTracker from "./ExpenseTracker";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);
  const filterChangeHandler = (selectedYear) => {
    const filtered = props.items.filter(
      (expenses) => expenses.date.getFullYear() === Number(selectedYear)
    );
    setFilteredYear(selectedYear);
    setFilteredExpenses(filtered);
  };

  let filteredLength1 =
    filteredExpenses.length === 1 &&
    filteredExpenses.map((datas) => (
      <>
        <ExpenseTracker key={datas.id} expensesData={datas} />
        <h2>Only single Expense here. Please add more...</h2>
      </>
    ));

  let filteredLengthAny = filteredExpenses.length != 1 && filteredExpenses.map((datas) => (
    <ExpenseTracker key={datas.id} expensesData={datas} />
  ));

  return (
    <div className="all">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredLength1}

      {filteredLengthAny}

      {/* <ExpenseTracker expensesData={props.items[0]}/>
        <ExpenseTracker expensesData={props.items[1]}/>
        <ExpenseTracker expensesData={props.items[2]}/>
        <ExpenseTracker expensesData={props.items[3]}/>
        <ExpenseTracker expensesData={props.items[4]}/> */}
    </div>
  );
};
export default Expenses;
