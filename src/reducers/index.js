import { combineReducers } from 'redux'
import { reducer as reducerForm } from 'redux-form'

const rootReducer = combineReducers({
  form: reducerForm,
  state: (state = {}) => state
})

export default rootReducer
