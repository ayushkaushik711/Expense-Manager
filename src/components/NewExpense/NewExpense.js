import React,{useState} from 'react';

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const [isEditing,setIsEditing]=useState(false);
    const newExpenseHandler=(data)=>{
        // console.log(data);
        props.onNewExpenseData(data);
    }
    const cancelHandler=()=>{
        setIsEditing(false);
    }
    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    return <div className="new-expense">
        {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
        {isEditing&&<ExpenseForm onCancel={cancelHandler} onNewExpenseData={newExpenseHandler}/>}
    </div>
}

export default NewExpense;