import {Dispatch} from 'react'
import {IProduct, IProductTypes, ProductsAction} from '../../types/products'
import {setProducts, setProductsIsLoading, setProductsTotalCount, setProductsTypes} from '../reducers/productsReducer'
import {getProducts} from '../../api/productsApi'
import {ISort, SortTypesName, SortTypesPosition} from '../../types/sort'

interface filters {
  type?: string | null,
  minPrice?: string,
  maxPrice?: string,
  manufacturers?: string[] | null
}

const sortProducts = (products: IProduct[], sort: ISort): IProduct[] => {
  let result = products
  if (sort.name === SortTypesName.name) {
    if (sort.position === SortTypesPosition.up) {
      result = products.sort((a, b) => {
        if (a.manufacturer.toLowerCase() + a.name.toLowerCase() < b.manufacturer.toLowerCase() + b.name.toLowerCase()) {
          return -1
        }
        if (a.manufacturer.toLowerCase() + a.name.toLowerCase() > b.manufacturer.toLowerCase() + b.name.toLowerCase()) {
          return 1
        }
        return 0
      })
    } else {
      result = products.sort((a, b) => {
        if (a.manufacturer.toLowerCase() + a.name.toLowerCase() < b.manufacturer.toLowerCase() + b.name.toLowerCase()) {
          return 1
        }
        if (a.manufacturer.toLowerCase() + a.name.toLowerCase() > b.manufacturer.toLowerCase() + b.name.toLowerCase()) {
          return -1
        }
        return 0
      })
    }
  } else {
    if (sort.position === SortTypesPosition.up) {
      result = products.sort((a, b) => a.price - b.price)
    } else {
      result = products.sort((a, b) => b.price - a.price)
    }
  }

  return result
}

const filterProducts = (products: IProduct[], filters: filters): IProduct[] => {
  let result = products
  if (filters.type) {
    result = result.filter(product => product.careType.includes(filters.type!))
  }

  if (filters.minPrice) {
    result = result.filter(product => product.price > Number(filters.minPrice))
  }

  if (filters.maxPrice) {
    result = result.filter(product => product.price < Number(filters.maxPrice))
  }

  if (filters.manufacturers && filters.manufacturers?.length !== 0) {
    result = result.filter(product => {
      let isContains = false
      filters.manufacturers!.forEach(manufacturer => manufacturer === product.manufacturer ? isContains = true : null)
      return isContains
    })
  }

  return result
}

const getProductsTypes = (products: IProduct[]) => {
  let types: IProductTypes[] = []
  products.forEach(product => {
    let foundIndex: number | null = null
    types.find((type, index) => {
      if (type.name === product.manufacturer) {
        foundIndex = index
      }
      return null
    })
    if (foundIndex || foundIndex === 0) {
      types[foundIndex].count += 1
    } else {
      types.push({
        name: product.manufacturer,
        count: 1
      })
    }
  })
  return types
}

const sortByPage = (products: IProduct[], page: number, limit: number): IProduct[] => {
  return products.slice((page - 1) * limit, page * limit)
}

export const fetchProducts = (page: number, limit: number, sort: ISort, filters?: filters) => {
  return (dispatch: Dispatch<ProductsAction>) => {
    dispatch(setProductsIsLoading(true))
    getProducts()
      .then(products => {
        let result = sortProducts(products, sort)
        if (filters) {
          result = filterProducts(products, filters)
        }
        dispatch(setProducts(sortByPage(result, page, limit)))
        dispatch(setProductsTotalCount(result.length))
        dispatch(setProductsTypes(getProductsTypes(products)))
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        dispatch(setProductsIsLoading(false))
      })
  }
}


