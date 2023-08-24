import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducer'

const rootreducer = combineReducers({
  userReducer
})

export default rootreducer
