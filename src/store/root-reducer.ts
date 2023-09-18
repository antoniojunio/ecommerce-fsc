import { combineReducers } from 'redux'
import cartReducer from './toolkit/cart/cart.slice'
import userReducer from './toolkit/user/user.slice'
import categoryReducer from './toolkit/category/category.slice'

const rootreducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootreducer
