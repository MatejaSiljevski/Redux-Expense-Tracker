import React from 'react'
import ExpenseList from '../../components/expenseList/ExpenseList';
import TopFold from '../../components/topFold/TopFold';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  )
}

export default Home