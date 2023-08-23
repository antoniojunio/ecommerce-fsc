import { createStore } from 'redux'

import rootreducer from './root-reducer'

const store = createStore(rootreducer)

export default store
