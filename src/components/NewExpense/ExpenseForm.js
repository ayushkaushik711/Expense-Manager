import React,{useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [date,setDate]=useState("");
    
    // const [userInput,setUserInput]=useState({title:"",amount:"",date:""});
    const titleChangeHandler=(e)=>{
        // console.log(e.target.value);
        setTitle(e.target.value);
        // setUserInput({...userInput,amount:e.target.value});
        // setUserInput((prevState)=>{
        //     return {
                    //   ...prevState,
                    //  amount:e.target.value}
        // });
        // console.log(title);
    }
    const amountChangeHandler=(e)=>{
        setAmount(e.target.value);
    }
    const dateChangeHandler=(e)=>{
        setDate(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData = {
            expenseTitle :title,
            expenseAmount :parseInt(amount),
            expenseDate :new Date(date)
        }   
        // console.log(expenseData);
        if(expenseData.expenseTitle===''||expenseData.expenseAmount===''||expenseData.expenseDate==='')
        {
            return;
        }
        props.onNewExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");        
    }
    const cancelHandler=()=>{
        setTitle("");
        setAmount("");
        setDate("");
        props.onCancel();        
    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input onChange={titleChangeHandler} value={title} type='text'/>
            </div>
            <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' onChange={amountChangeHandler} value={amount} min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' onChange={dateChangeHandler} min='2019-01-01' value={date} max='2022-12-31'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={cancelHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
            
        </div>
    </form>
}

export default ExpenseForm;