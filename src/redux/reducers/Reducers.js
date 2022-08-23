import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/ActionTypes";

const initialList = () => {
    const list = localStorage.getItem('expense-list')
    let expenses = []
    if(list) {
        expenses = JSON.parse(list)
    }
    return expenses
}
const initialState = {
    expenseList:initialList(),
    query:''
}

export const Reducers = (state=initialState, action) => {
    switch (action.type){
        case ADD_EXPENSE: 
        localStorage.setItem("expense-list", JSON.stringify([...state.expenseList, action.data]))
        return {...state, expenseList:[...state.expenseList, action.data]}

        case DELETE_EXPENSE: 
        const updatedList = state.expenseList.filter((exp) => exp.createdAt !== action.data.createdAt)
        localStorage.setItem('expense-list', JSON.stringify(updatedList))
        return {...state, expenseList: updatedList}
        case SEARCH_EXPENSE: 
        const {query} = action
        return {...state, query}
        default:
        return state;
    }
}