import React from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/New Expense/NewExpenses";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 287.78,
      date: new Date(2023, 2, 28),
      LocationOfExpenditure: "Wari",
    },
    {
      title: "Car Repairs",
      amount: 256.48,
      date: new Date(2023, 2, 31),
      LocationOfExpenditure: "Bihar",
    },
    {
      title: "Office supplies",
      amount: 2000.7,
      date: new Date(2023, 6, 11),
      LocationOfExpenditure: "Singhia",
    },
    {
      title: "Bank charges",
      amount: 254.79,
      date: new Date(2023, 5, 5),
      LocationOfExpenditure: "Samastipur",
    },
    {
      title: "Travel expenses",
      amount: 27865.89,
      date: new Date(2023, 4, 25),
      LocationOfExpenditure: "India",
    },
  ];

  const expenseForm = () => <NewExpenses/> ;

  //In the recent upgradation, you need not necesserily write "import React from "react";" in each and every file, but the first work that is done is converting the return code like the below written code as                 React.createElement("tagName" , {attributes as an object}, content1, content2, content3, ...........); we will not write code like this because it is not readable. Here one can clearly see that we must need a wrapper element.
  //you can return an array of elements but still we need array name i.e. array elements
  // return (
  //   React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, 'Lets"s Get Started')
  //   ),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <h1>Lets's Get Started</h1>
      <NewExpenses/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
