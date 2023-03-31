import {IProduct} from './products'

export interface IBasketItem {
  product: IProduct
  amount: number
}

export interface IBasketState {
  basketItems: IBasketItem[]
  isLoading: boolean,
  totalCount: number,
  totalPrice: number
}

export enum BasketActionTypes {
  SET_BASKET_ITEMS = 'SET_BASKET_ITEMS',
  SET_BASKET_ITEMS_IS_LOADING = 'SET_BASKET_ITEMS_IS_LOADING',
  SET_BASKET_ITEMS_TOTAL_COUNT = 'SET_BASKET_ITEMS_TOTAL_COUNT',
  SET_BASKET_ITEMS_TOTAL_PRICE = 'SET_BASKET_ITEMS_TOTAL_PRICE'
}

interface SetBasketItemsAction {
  type: BasketActionTypes.SET_BASKET_ITEMS,
  basketItems: IBasketItem[]
}

interface SetBasketItemsTotalPrice {
  type: BasketActionTypes.SET_BASKET_ITEMS_TOTAL_PRICE,
  totalPrice: number
}

interface SetBasketItemsIsLoadingAction {
  type: BasketActionTypes.SET_BASKET_ITEMS_IS_LOADING,
  isLoading: boolean
}

interface SetBasketItemsTotalCount {
  type: BasketActionTypes.SET_BASKET_ITEMS_TOTAL_COUNT,
  totalCount: number
}

export type BasketAction =
  SetBasketItemsAction
  | SetBasketItemsIsLoadingAction
  | SetBasketItemsTotalCount
  | SetBasketItemsTotalPrice