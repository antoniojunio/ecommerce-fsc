import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import UserContextProvider from './contexts/user.context.tsx'
import CategoryContextProvider from './contexts/category.context.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)
