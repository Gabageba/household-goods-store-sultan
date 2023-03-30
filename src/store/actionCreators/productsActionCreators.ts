import {Dispatch} from 'react'
import {IProduct, IProductTypes, ProductsAction} from '../../types/products'
import {setProducts, setProductsIsLoading, setProductsTotalCount, setProductsTypes} from '../reducers/productsReducer'
import {getProducts} from '../../api/productsApi'
import {IManufacturer} from '../../types/filter'

interface filters {
  type?: string | null,
  minPrice?: string,
  maxPrice?: string,
  manufacturers?: IManufacturer[] | null
}

const filterProducts = (products: IProduct[], filters: filters): IProduct[]=> {
  let result = products
  if (filters.type) {
    result = result.filter(product =>  product.careType.includes(filters.type!))
  }

  if (filters.minPrice) {
    result = result.filter(product => product.price > Number(filters.minPrice))
  }

  if (filters.maxPrice) {
    result = result.filter(product => product.price < Number(filters.maxPrice))
  }

  if (filters.manufacturers?.length !== 0) {
    result = result.filter(product => {
      let isContains = false
      filters.manufacturers!.forEach(manufacturer => manufacturer.name === product.manufacturer ? isContains = true : null)
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

export const fetchProducts = (page: number, limit: number, filters?: filters) => {
  return (dispatch: Dispatch<ProductsAction>) => {
    dispatch(setProductsIsLoading(true))
    getProducts()
      .then(products => {
        let result = products
        if (filters) {
          result = filterProducts(products, filters)
        }

        dispatch(setProducts(sortByPage(result, page, limit)))
        dispatch(setProductsTotalCount(result.length))
        dispatch(setProductsTypes(getProductsTypes(result)))
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        setProductsIsLoading(false)
      })
  }
}


