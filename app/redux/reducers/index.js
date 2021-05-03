import { combineReducers } from 'redux'
import GetDrinksReducer from './GetDrinksReducer'

export default combineReducers({
  getDrinks: GetDrinksReducer
})
