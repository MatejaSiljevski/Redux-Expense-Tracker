import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchExpense } from '../../redux/actions/Actions'
import './topfold.css'

const TopFold  = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const handleQuery = (e) => {
    setQuery(e.target.value)
    dispatch(searchExpense(e.target.value))
  }
  return (
    <div className='topfold'>
      {window.location.pathname =='/' ? (

        <div className="home-topfold">
            <div className="searchbar">
            <i class="fi fi-rr-search"></i>
            <input type="text" placeholder='Search for Expenses' value={query} onChange={(e)=> handleQuery(e)} />
            </div>
            <Link to={'/add-expense'}>
              <div className="add-button">
              <i class="fi fi-rr-add"></i>
              <label htmlFor="">Add</label>
              </div>
            </Link>
        </div> 
      ):
      (
        <>
          <div className='add-topfold'>
            <Link to="/">
              <div className='add-topfold-button'>
              <i class="fi fi-rs-arrow-small-left"></i>
                <label htmlFor="">Back</label>
              </div>
            </Link>
            <Link to="/">
              <div className='add-topfold-button'>
                <i class="fi fi-rr-cross-circle"></i>
                <label htmlFor="">Cancel</label>
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default TopFold 