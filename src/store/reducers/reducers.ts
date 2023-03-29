import {combineReducers} from 'redux'
import {productsReducer} from './productsReducer'

export const rootReducer = combineReducers({
  products: productsReducer
})

export type RootState = ReturnType<typeof rootReducer>