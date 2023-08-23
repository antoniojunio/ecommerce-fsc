import { combineReducers } from 'redux'
import userReducer from './reducers/user.reducer'

const rootreducer = combineReducers({
  userReducer
})

export default rootreducer
