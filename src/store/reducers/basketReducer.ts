import {BasketAction, BasketActionTypes, IBasketItem, IBasketState} from '../../types/basket'

const initialState: IBasketState = {
  basketItems: [],
  isLoading: false,
  totalCount: 0,
  totalPrice: 0
}

export const basketReducer = (state = initialState, action: BasketAction): IBasketState => {
  switch (action.type) {
    case BasketActionTypes.SET_BASKET_ITEMS:
      return {
        ...state,
        basketItems: action.basketItems
      }
    case BasketActionTypes.SET_BASKET_ITEMS_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.totalPrice
      }
    case BasketActionTypes.SET_BASKET_ITEMS_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case BasketActionTypes.SET_BASKET_ITEMS_TOTAL_COUNT:
    return {
      ...state,
      totalCount: action.totalCount
    }
    default:
      return state
  }
}

export const setBasketItems = (basketItems: IBasketItem[]): BasketAction => ({
  type: BasketActionTypes.SET_BASKET_ITEMS,
  basketItems
})
export const setBasketItemsIsLoading = (isLoading: boolean): BasketAction => ({
  type: BasketActionTypes.SET_BASKET_ITEMS_IS_LOADING,
  isLoading
})
export const setBasketItemsTotalCount = (totalCount: number): BasketAction => ({
  type: BasketActionTypes.SET_BASKET_ITEMS_TOTAL_COUNT,
  totalCount
})
export const setBasketItemsTotalPrice = (totalPrice: number): BasketAction => ({
  type: BasketActionTypes.SET_BASKET_ITEMS_TOTAL_PRICE,
  totalPrice
})


