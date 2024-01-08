import ExpenseTracker from "./ExpenseTracker";
function App() {
  const expenses=[
    {
      title : "Car Insurance",
      amount : 287.78,
      date : new Date(2023, 2, 28),
      LocationOfExpenditure : "Wari"
    },
    {
      title : "Car Repairs",
      amount : 256.48,
      date : new Date(2023, 2, 31),
      LocationOfExpenditure : "Bihar"
    },
    {
      title : "Office supplies",
      amount : 2000.70,
      date : new Date(2023, 6, 11),
      LocationOfExpenditure : "Singhia"
    },
    {
      title : "Bank charges",
      amount : 254.79,
      date : new Date(2023, 5, 5),
      LocationOfExpenditure : "Samastipur"
    },
    {
      title : "Travel expenses",
      amount : 27865.89,
      date : new Date(2023, 4, 25),
      LocationOfExpenditure : "India"
    }
  ];
  return (
    <>
      <h1>Lets's Get Started</h1>
      {expenses.map((datas)=>(<ExpenseTracker expensesData={datas}/>))}


      {/* <ExpenseTracker expensesData={expenses[0]}/>
      <ExpenseTracker expensesData={expenses[1]}/>
      <ExpenseTracker expensesData={expenses[2]}/>
      <ExpenseTracker expensesData={expenses[3]}/>
      <ExpenseTracker expensesData={expenses[4]}/> */}
    </>
  );
}

export default App;
