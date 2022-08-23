import {combineReducers, createStore} from 'redux'
import {Reducers} from '../reducers/Reducers'

const reducer = combineReducers({
    expenses:Reducers,
})
const initialState = {}
const store = createStore(reducer, initialState)

export default store;
