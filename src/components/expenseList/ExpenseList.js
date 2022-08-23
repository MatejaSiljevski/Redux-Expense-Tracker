import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { toast, ToastContainer } from "react-toastify";
import './expenseList.css'

const ExpenseList = () => {
  const {expenseList:list, query} = useSelector(state=> state.expenses)

  const filteredList = list.filter((item)=> item.title.toLowerCase().includes(query.toLowerCase()))
  const notifySuccess = () => toast.success('Expense Deleted')
  console.log(list)
  return (
    <div className='expense-list'>
        <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        />
        {filteredList.length > 0 ? filteredList.map((item, i)=> {
            return (
                <Card item={item} key={i} notifySuccess={notifySuccess}/>
            )
        }) : (
            <div className='empty-state'>
                <img src='images/empty.png' alt="Empty List" className='empty-image' />
                <label htmlFor="">Your expense list is empty.</label>
            </div>
        )} 
    </div>
  )
}

export default ExpenseList