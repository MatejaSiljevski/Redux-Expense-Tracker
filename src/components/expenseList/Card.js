import React from 'react'
import moment from 'moment'
import Trash from '../../assets/icons8-trash-48.png'
import { useDispatch } from 'react-redux'
import { deleteExpense } from '../../redux/actions/Actions'
import './card.css'

const Card = ({item, notifySuccess}) => {
  const time = moment(item.createdAt).fromNow()
  const dispatch = useDispatch()

  const handleTrash = () => {
    dispatch(deleteExpense(item))
    notifySuccess()
  }

  return (
    <div className='card' style={{borderRight:`6px solid ${item.category.color}`}}>
      <div className='card-image-container'>
        <img src={item.category.icon} alt="" className='card-image'/>
      </div>
      <div className="card-info">
        <label htmlFor="" className='card-title'>{item.title}</label>
        <label htmlFor="" className='card-time'>{time}</label>
      </div>

      <div className="card-right">
        <label htmlFor="" className='card-amount'>{item.amount}din</label>
        <div className="delete-icon">
          <img src={Trash} alt="" style={{width:'30px', height:'33px'}} onClick={handleTrash} />
        </div>
      </div>
    </div>
  )
}

export default Card