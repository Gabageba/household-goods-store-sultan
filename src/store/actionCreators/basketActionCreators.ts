import {getBasketItems} from '../../api/basketApi'
import {
  setBasketItems,
  setBasketItemsIsLoading, setBasketItemsTotalCount, setBasketItemsTotalPrice,
} from '../reducers/basketReducer'
import {Dispatch} from 'react'
import {BasketAction, IBasketItem} from '../../types/basket'
import {IProduct} from '../../types/products'
import {BASKET_LOCAL_STORAGE} from '../../utils/consts'

const setTotal = (basketItems: IBasketItem[], dispatch: Dispatch<BasketAction>) => {
  let totalCount = 0
  let totalPrice = 0
  basketItems.forEach(item => {
    totalCount += item.amount
    totalPrice += item.product.price * item.amount
  })
  dispatch(setBasketItemsTotalCount(totalCount))
  dispatch(setBasketItemsTotalPrice(totalPrice))
}

export const addBasketItem = (product: IProduct, count = 1) => {
  return (dispatch: Dispatch<BasketAction>) => {
    dispatch(setBasketItemsIsLoading(true))
    getBasketItems()
      .then(basketItems => {
        let foundIndex: number | null = null
        let result = basketItems
        basketItems.forEach((item, index) => {
          if (item.product.id === product.id) {
            foundIndex = index
          }
        })
        if (foundIndex || foundIndex === 0) {
          result[foundIndex].amount += count
        } else {
          result = [...basketItems,{product, amount: count} ]
        }
        setTotal(result, dispatch)
        localStorage.setItem(BASKET_LOCAL_STORAGE, JSON.stringify(result))
        dispatch(setBasketItems(result))
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setBasketItemsIsLoading(false)))
  }
}

export const decreaseBasketItemAmount = (product: IProduct) => {
  return (dispatch: Dispatch<BasketAction>) => {
    dispatch(setBasketItemsIsLoading(true))
    getBasketItems()
      .then(basketItems => {
        let result = basketItems
        let foundIndex: number | null = null
        basketItems.forEach((item, index) => {
          if (item.product.id === product.id) {
            foundIndex = index
          }
        })
        if (foundIndex || foundIndex === 0) {
          if (result[foundIndex].amount > 1) {
            result[foundIndex].amount -= 1
          } else {
            result.splice(foundIndex, 1)
          }
        }
        setTotal(result, dispatch)
        localStorage.setItem(BASKET_LOCAL_STORAGE, JSON.stringify(result))
        dispatch(setBasketItems(result))
      })
      .catch(e => console.error(e))
      .finally(() => dispatch(setBasketItemsIsLoading(false)))
  }
}

export const deleteBasketItem = (id: number) => {
  return (dispatch: Dispatch<BasketAction>) => {
    dispatch(setBasketItemsIsLoading(true))
    getBasketItems()
      .then(basketItems => {
        let result = basketItems
        let foundIndex: number | null = null
        basketItems.forEach((item, index) => {
          if (item.product.id === id) {
            foundIndex = index
          }
        })
        if (foundIndex || foundIndex === 0) {
          result.splice(foundIndex, 1)
        }
        setTotal(result, dispatch)
        localStorage.setItem(BASKET_LOCAL_STORAGE, JSON.stringify(result))
        dispatch(setBasketItems(result))
      })
  }
}

export const fetchBasketItems = () => {
  return (dispatch: Dispatch<BasketAction>) => {
    dispatch(setBasketItemsIsLoading(true))
    getBasketItems()
      .then(basketItems => {
        if (basketItems) {
          setTotal(basketItems, dispatch)
          dispatch(setBasketItems(basketItems))
        } else {
          setTotal(basketItems, dispatch)
          dispatch(setBasketItems([]))
        }
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        dispatch(setBasketItemsIsLoading(false))
      })
  }
}

export const clearBasket = () => {
  return (dispatch: Dispatch<BasketAction>) => {
    localStorage.setItem(BASKET_LOCAL_STORAGE, '')
    dispatch(setBasketItems([]))
    dispatch(setBasketItemsTotalPrice(0))
    dispatch(setBasketItemsTotalCount(0))
  }
}