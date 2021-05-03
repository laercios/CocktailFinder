import {
  GET_DRINKS_SUCCESS,
  GET_DRINKS_LOADING,
  GET_DRINKS_FAIL,
  RESET_DRINKS
} from '~/redux/actions/types'

const INITIAL_STATE = {
  loading: false,
  error: '',
  data: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DRINKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.data
      }
    case GET_DRINKS_LOADING:
      return { ...state, loading: true, error: '' }
    case GET_DRINKS_FAIL:
      return { ...state, loading: false, error: 'Occurred some error!', data: [] }
    case RESET_DRINKS:
      return {
        ...state,
        loading: false,
        error: '',
        data: []
      }
    default:
      return state
  }
}
