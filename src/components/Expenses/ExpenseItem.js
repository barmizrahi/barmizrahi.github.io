import "./ExpenseItem.css";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseTitlePrice from './ExpenseTitlePrice';
import React  from 'react';

function ExpenseItem(props) {
 // const [myTitle , setTitle] = useState(props.title);
  
  
 
  return (
    <Card className='expense-item'>
     <ExpenseDate 
     date = {props.date}
     ></ExpenseDate>
     <ExpenseTitlePrice title = {props.title} amount = {props.amount}></ExpenseTitlePrice>
    </Card>
  );
}
export default ExpenseItem;
