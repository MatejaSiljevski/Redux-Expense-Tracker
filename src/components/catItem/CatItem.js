import React from 'react'
import '../addForm/addForm.css'

const CatItem = ({item, setCategory, setCategoryOpen, handleCategory}) => {

  return (
    <div className='category-item' style={{borderRight:`5px solid ${item.color}`}} onClick={()=> handleCategory(item)}>
        <label htmlFor="">{item.title}</label>
        <img src={item.icon} alt="" />
    </div>
  )
}

export default CatItem