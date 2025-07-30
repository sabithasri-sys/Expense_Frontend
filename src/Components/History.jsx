import React from 'react'
import Expenseitem from './Expenseitem'
function History(props) {
  const Expenses = props.expense
  return (
    <>
      <div className='History'>
        <h3>History</h3>
      </div>
      {
        Expenses.map((expense) => (
          <Expenseitem key={expense._id}
            expense={expense}
            isEditing={props.itemToEdit === expense._id}
            deleteExpense={props.deleteExpense}
            setItemToEdit={props.setItemToEdit} />
        ))
  //       Expenses.map((expense, index) => (
  // <Expenseitem
  //   key={expense._id || index}
  //   expense={expense}
  //   isEditing={props.itemToEdit === expense._id}
  //   deleteExpense={props.deleteExpense}
  //   setItemToEdit={props.setItemToEdit}
  // />


        }
    </>
  )
}

export default History
