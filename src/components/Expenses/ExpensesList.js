import  ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props){
    
    if(props.myList.length === 0){
        return <h2 className="expenses-list__fallback"> No items to show</h2>;
    }
    return <ul className="expenses-list">
        {props.myList.map((expense) => (
        <ExpenseItem
        key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
};
export default ExpensesList;