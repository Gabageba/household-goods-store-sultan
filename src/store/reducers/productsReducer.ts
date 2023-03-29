import {IProduct, IProductsState, IProductTypes, ProductsAction, ProductsActionTypes} from '../../types/products'

const initialState: IProductsState = {
  products: [],
  productsType: [],
  page: 1,
  limit: 9,
  isLoading: false
}

export const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case ProductsActionTypes.SET_PRODUCTS_PAGE:
      return {
        ...state,
        page: action.page
      }
    case ProductsActionTypes.SET_PRODUCTS_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case ProductsActionTypes.SET_PRODUCTS_TYPES:
      return {
        ...state,
        productsType: action.productTypes
      }
    default:
      return state
  }
}

export const setProductsIsLoading = (isLoading: boolean): ProductsAction => ({
  type: ProductsActionTypes.SET_PRODUCTS_IS_LOADING,
  isLoading
})
export const setProducts = (products: IProduct[]): ProductsAction => ({
  type: ProductsActionTypes.SET_PRODUCTS,
  products
})
export const setProductsPage = (page: number): ProductsAction => ({type: ProductsActionTypes.SET_PRODUCTS_PAGE, page})
export const setProductsTypes = (productTypes: IProductTypes[]): ProductsAction => ({
  type: ProductsActionTypes.SET_PRODUCTS_TYPES,
  productTypes
})