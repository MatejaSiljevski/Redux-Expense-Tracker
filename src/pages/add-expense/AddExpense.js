import React from 'react'
import AddForm from '../../components/addForm/AddForm'
import TopFold from '../../components/topFold/TopFold'
import './add-expense.css'

const AddExpense = () => {
  return (
    <div className='add-expense'>
      <TopFold />
      <AddForm />
    </div>
  )
}

export default AddExpense