import React,{useState} from 'react';

import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from './components/NewExpense/NewExpense.js';

const App=()=>{
    const [expenses,setExpenses] = useState([
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
    ]);
    const newExpenseHandler=(newExpenseData)=>{
        
      const expenseData={
        amount :newExpenseData.expenseAmount,
        title : newExpenseData.expenseTitle,
        date : newExpenseData.expenseDate,
        id : toString(Math.random()*100000+1)
      }
      setExpenses((prevState)=>{
        return [expenseData,...prevState];
      })
      // console.log(expenses);
    }
    return <div>
      <NewExpense onNewExpenseData={newExpenseHandler}/>
      <Expenses items={expenses} />;
    </div>
}

export default App;

