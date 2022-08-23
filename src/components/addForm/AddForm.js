import React, {useState} from 'react'
import { toast, ToastContainer } from "react-toastify";
import {useDispatch} from 'react-redux'
import {categories} from '../../contstants/Constants'
import { addExpense } from '../../redux/actions/Actions'
import CatItem from '../catItem/CatItem'
import SuccessModal from './SuccessModal';
import './addForm.css'
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const kategorije = categories
  const [title, setTittle] = useState('')
  const [amount, setAmount] = useState('')
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const handleTitle = (e) => {
    setTittle(e.target.value)
   }  
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value)
    if(isNaN(val)){
        setAmount('')
        return 
    }
    setAmount(val)
  }

  const handleCategory = (obj) => {
    setCategory(obj)
    setCategoryOpen(false)
  }

  const handleSubmit = () => {
    if(title === '' || amount === '' || !category){
        const notify = () => toast("Please enter complete data");
        notify();
        return;
    }
    const data = {
        title,
        amount,
        category,
        createdAt: new Date()
    }
    dispatch(addExpense(data))
    setModalOpen(true)
  }

  return (
    <div className="add-form" >
        <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        />
        {modalOpen ? (
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        ): null}
        <div className="form-item">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Give a name to your expenditure' value={title} onChange={handleTitle}/>
        </div>
        <div className="form-item">
            <label htmlFor="">Amount din</label>
            <input type="" value={amount} placeholder="Enter Amount" className='amount-input' onChange={handleAmount}/>
        </div>
        <div className="category-container-parent">
            <div className="category">
                <div className='category-dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
                    <label htmlFor="">{category ? category.title : 'Category'}</label>
                    <i class="fi fi-rr-angle-down"></i>
                </div>
                {categoryOpen && (
                    (
                        <div className='category-container'>
                            {kategorije.map((item, i)=> {
                                return (
                                        <CatItem key={i} item={item} setCategory={setCategory} setCategoryOpen={setCategoryOpen} handleCategory={handleCategory}/>
                                )
                            })}
                        </div>
                    )
                )}
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label htmlFor="">Add</label>
                    <i class="fi fi-rr-paper-plane"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddForm