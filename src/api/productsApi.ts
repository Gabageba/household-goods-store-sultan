import axios from 'axios'
import {PRODUCTS_LOCAL_STORAGE} from '../utils/consts'
import {IProduct} from '../types/products'

export const getProducts = async (): Promise<IProduct[]>=> {
  const localData = localStorage.getItem(PRODUCTS_LOCAL_STORAGE)
  if (!localData || localData.length === 0) {
    const {data} = await axios.get('products/products.json')
    localStorage.setItem(PRODUCTS_LOCAL_STORAGE, JSON.stringify(data))
    return data
  }
  return JSON.parse(localData)
}