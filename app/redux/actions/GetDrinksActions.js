import axios from 'axios'
import {
  GET_DRINKS_SUCCESS,
  GET_DRINKS_FAIL,
  GET_DRINKS_LOADING
} from '~/redux/actions/types'

import { Constants } from '~/common'

export const getDrinks = (searchValue) => {
  return (dispatch) => {
    dispatch({ type: GET_DRINKS_LOADING })

    axios.get(Constants.URL_API + searchValue).then(
      (response) => {
        dispatch({
          type: GET_DRINKS_SUCCESS,
          data: response.data.drinks
        })
      }
    ).catch(() => {
      dispatch({ type: GET_DRINKS_FAIL })
    })
  }
}
