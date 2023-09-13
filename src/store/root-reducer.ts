import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducer'
import cartReducer from './reducers/cart/cart.reducer'

const rootreducer = combineReducers({
  userReducer,
  cartReducer
})

export default rootreducer
