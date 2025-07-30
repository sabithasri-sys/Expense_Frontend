import React from "react"
import { useEffect, useState } from "react"
import ExpenseForm from "./Expenseform.jsx"
import '../index.css'
import History from "./History.jsx"
// import {stringify, v4 as uid} from "uuid"
import Balancecontainer from "./Balancecontainer.jsx"

function ExpenseContainer() {
  const [expense, setExpense] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemToEdit, setItemToEdit] = useState(null);

  ///fetch
  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/expenses');
      const data = await response.json();
      setExpense(data);
    } catch (error) {
      console.error('failed to fetch', error);

    }
    setLoading(false);
  };
  console.log(expense);

  useEffect(() => {
    fetchExpenses();


  }, []);

  const addExpense = async (title, amount) => {
    try {
      const response = await fetch('http://localhost:3000/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, amount }),
      });
      if (response.ok) {
        const newItem = await response.json();
        setExpense((prev) => [...prev, newItem]);
      } else {
        console.error('Failed to add expense');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/expenses/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setExpense(expense.filter((exp) => exp._id !== id));
      } else {
        console.error('Failed to delete expense');
      }
    } catch (error) {
      console.log('Failed to  delte expense', error)
    }
  };
    const editExpense= async (id,title,amount)=>{
      try{
        const response =await fetch(`http://localhost:3000/expenses/${id}`,{
          method:'PUT',
           headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, amount }),
        });
        if(response.ok){
         const updatedItem = await response.json();
        setExpense((prev) => prev. map((exp)=>(exp._id  === id ? updatedItem :exp)));

           
        } else{
          console.error('failed to edit expense');
        }
      }catch (error){
         console.log('failed to edit expense',error)
      }
    };



  return (
    <div className='expense-container'>
      <h3>Expense Tracker</h3>
      <Balancecontainer expense={expense} />
      <History expense={expense} deleteExpense={deleteExpense} editExpense={editExpense} setItemToEdit={setItemToEdit}
      />
      <ExpenseForm addExpense={addExpense} itemToEdit={itemToEdit} editExpense={editExpense} setItemToEdit ={setItemToEdit} />
      {loading && <p>Loading...</p>}
    </div>
  );
}
// function deleteExpense(_id){
//      setExpense(expense.filter((exp)=>exp._id!=_id));
// }



export default ExpenseContainer;
