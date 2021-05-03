import {
  RESET_DRINKS
} from '~/redux/actions/types'

export const resetDrinks = () => {
  return (dispatch) => {
    dispatch({ type: RESET_DRINKS })
  }
}
