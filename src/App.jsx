import React from 'react'
import ExpenseContainer from './Components/ExpenseContainer.jsx'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import Home from './Home.jsx'
import Post from './Post.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Link to={"/expense"}>  <button> click to Expense</button></Link><br/>
    <Link to={"/"}>Home</Link> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/expense' element={<ExpenseContainer/>}/>
      <Route path='/user/:id' element={<Post/>}/>
       </Routes> 
       </BrowserRouter>
     {/* <ExpenseContainer/> */}
     </>
  )
}

export default App