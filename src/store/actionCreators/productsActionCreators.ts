import {Dispatch} from 'react'
import {IProduct, IProductTypes, ProductsAction} from '../../types/products'
import {setProducts, setProductsIsLoading, setProductsTotalCount, setProductsTypes} from '../reducers/productsReducer'
import {getProducts} from '../../api/productsApi'

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
    }
    else {
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

export const fetchProducts = (page: number, limit: number) => {
  return (dispatch: Dispatch<ProductsAction>) => {
    dispatch(setProductsIsLoading(true))
    getProducts()
      .then(products => {
        dispatch(setProducts(sortByPage(products, page, limit)))
        dispatch(setProductsTotalCount(products.length))
        dispatch(setProductsTypes(getProductsTypes(products)))
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        setProductsIsLoading(false)
      })
  }
}

