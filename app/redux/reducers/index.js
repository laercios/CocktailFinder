import { combineReducers } from 'redux'
import DrinksReducer from './DrinksReducer'

export default combineReducers({
  drinks: DrinksReducer
})
