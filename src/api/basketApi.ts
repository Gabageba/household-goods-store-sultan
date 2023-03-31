import {BASKET_LOCAL_STORAGE} from '../utils/consts'
import {IBasketItem} from '../types/basket'

export const getBasketItems = async (): Promise<IBasketItem[]>=> {
  const localData = localStorage.getItem(BASKET_LOCAL_STORAGE)
  if (!localData) {
    return []
  }
  return JSON.parse(localData)
}