import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootreducer from './root-reducer'

const store = createStore(rootreducer, applyMiddleware(logger))

export type RootState = ReturnType<typeof store.getState>

export default store
