import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'

import UserContextProvider from './contexts/user.context.tsx'
import CategoryContextProvider from './contexts/category.context.tsx'
import CartContextProvider from './contexts/cart.context.tsx'
import store from './store/store.ts'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <CategoryContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
)
