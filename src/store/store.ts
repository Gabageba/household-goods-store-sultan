import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './reducers/reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))