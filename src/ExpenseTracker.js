import "./ExpenseItem.css"
function ExpenseTracker(props) {
    return(
        <div className="expense-item">
            <div>{props.expensesData.date}</div>
            <div className="expense-item__description">
                <h2>{props.expensesData.title}</h2>
                <h2>{props.expensesData.LocationOfExpenditure}</h2>
                <div  className="expense-item__price">${props.expensesData.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseTracker;