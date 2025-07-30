import React from 'react'
import{Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Home Page</div>
     <Link to={"/expense"}> <button> click to Expense</button></Link>
     </>
  )
}

export default Home