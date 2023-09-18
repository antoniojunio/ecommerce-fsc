import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducer'
import cartReducer from './reducers/cart/cart.reducer'
import categoryReducer from './reducers/category/category.reducer'

const rootreducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootreducer
