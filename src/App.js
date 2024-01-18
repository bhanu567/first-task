import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/New Expense/NewExpenses";

const DummyData = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 287.78,
    date: new Date(2019, 2, 28),
    LocationOfExpenditure: "Wari",
  },
  {
    id: "e2",
    title: "Car Repairs",
    amount: 256.48,
    date: new Date(2022, 2, 31),
    LocationOfExpenditure: "Bihar",
  },
  {
    id: "e3",
    title: "Office supplies",
    amount: 200.7,
    date: new Date(2021, 6, 11),
    LocationOfExpenditure: "Singhia",
  },
  {
    id: "e4",
    title: "Bank charges",
    amount: 254.79,
    date: new Date(2020, 5, 5),
    LocationOfExpenditure: "Samastipur",
  },
  {
    id: "e5",
    title: "Travel expenses",
    amount: 285.89,
    date: new Date(2019, 4, 25),
    LocationOfExpenditure: "India",
  },
];
function App() {
  
  const [expenses, setNewExpenses] = useState(DummyData);

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
  const addExpenseDataHandler = (newExpenseItem) => {
    // setNewExpenses([...expenses, newExpenseItem]); //(said earlier it is not a good idea, when your current state depends on the previous state as in this case, your new array should have previous element)
    setNewExpenses((prevExpenses) => {
      return [...prevExpenses, newExpenseItem, ];
    });
  };

  return (
    <div>
      <h1>Let's Get Started</h1>
      <NewExpenses onNewExpenseData={addExpenseDataHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
