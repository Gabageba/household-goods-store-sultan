import {Dispatch} from 'react'
import {IProduct, IProductTypes, ProductsAction} from '../../types/products'
import {setProducts, setProductsIsLoading, setProductsTypes} from '../reducers/productsReducer'
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

export const fetchProducts = () => {
  return (dispatch: Dispatch<ProductsAction>) => {
    dispatch(setProductsIsLoading(true))
    getProducts()
      .then(products => {
        dispatch(setProducts(products))
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
