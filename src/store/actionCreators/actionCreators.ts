import * as productsActionCreators from './productsActionCreators'
import * as basketActionCreators from './basketActionCreators'
import {setProductsPage} from '../reducers/productsReducer'

export default {
  ...productsActionCreators, setProductsPage, ...basketActionCreators
}