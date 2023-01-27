import React,{useState} from 'react';

import './Expenses.css';

import ExpenseFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState("2020");
    // const items=props.items;

    const filterHandler=(year)=>{
        setFilteredYear(year);
        // console.log(year);
    }    
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    // console.log(filteredExpenses);
    return <Card className='expenses'>
  
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler}/>
        <ExpensesChart expenses={filteredExpenses} />
        {/* {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        <ExpensesList items={filteredExpenses} />
        {/* <ExpenseItem date={items[0].date} title={items[0].title} amount={items[0].amount}/>
        <ExpenseItem date={items[1].date} title={items[1].title} amount={items[1].amount}/>
        <ExpenseItem date={items[2].date} title={items[2].title} amount={items[2].amount}/>
        <ExpenseItem date={items[3].date} title={items[3].title} amount={items[3].amount}/> */}
    </Card>
}
export default Expenses;