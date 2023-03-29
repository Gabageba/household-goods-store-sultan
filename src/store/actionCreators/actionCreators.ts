import * as productsActionCreators from './productsActionCreators'
import {setProductsPage} from '../reducers/productsReducer'

export default {
  ...productsActionCreators, setProductsPage
}