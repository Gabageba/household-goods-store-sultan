export interface IProduct {
  id: number,
  url: string,
  name: string,
  sizeType: string,
  size: number,
  quantity?: string,
  barcode: string,
  manufacturer: string,
  brand: string,
  description: string,
  price: number,
  careType: string[]
}

export interface IProductTypes {
  name: string
  count: number
}

export interface IProductsState {
  products: IProduct[],
  productsType: IProductTypes[],
  page: number,
  limit: number,
  isLoading: boolean,
  totalCount: number
}

export enum ProductsActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_PRODUCTS_PAGE = 'SET_PRODUCTS_PAGE',
  SET_PRODUCTS_IS_LOADING = 'SET_PRODUCTS_IS_LOADING',
  SET_PRODUCTS_TYPES = 'SET_PRODUCTS_TYPES',
  SET_PRODUCTS_TOTAL_COUNT = 'SET_PRODUCTS_TOTAL_COUNT'
}

interface SetProductsAction {
  type: ProductsActionTypes.SET_PRODUCTS,
  products: IProduct[]
}

interface SetProductsPageAction {
  type: ProductsActionTypes.SET_PRODUCTS_PAGE,
  page: number
}

interface SetProductsIsLoadingAction {
  type: ProductsActionTypes.SET_PRODUCTS_IS_LOADING,
  isLoading: boolean
}

interface SetProductsTypeAction {
  type: ProductsActionTypes.SET_PRODUCTS_TYPES,
  productTypes: IProductTypes[]
}

interface SetProductsTotalCount {
  type: ProductsActionTypes.SET_PRODUCTS_TOTAL_COUNT,
  totalCount: number
}

export type ProductsAction =
  SetProductsAction
  | SetProductsPageAction
  | SetProductsIsLoadingAction
  | SetProductsTypeAction
  | SetProductsTotalCount