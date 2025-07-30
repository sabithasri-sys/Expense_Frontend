import React from 'react'
import Currentitem from './Currentitem.jsx'
import '../index.css'
function Balancecontainer(props) {
  const{ expense}=props;
  let income=0;
  let expenses=0;

  expense.forEach ((item)=>{
    let{amount}=item;
    if(amount>0)
    {
      income+= parseInt(amount);
    }
    else{
      expenses+= parseInt(amount);
    }
  })
  
  return (
    <>
    <div className='balance-container'>
        <Currentitem  title="income" amount={income} type="income"/>
        <Currentitem title="expense" amount={expenses}type="expense"/>
        <Currentitem title="Balance"  amount={income+expenses}type="balance"/>
    </div>
    </>
  )
}

export default Balancecontainer