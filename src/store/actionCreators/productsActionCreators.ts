import {Dispatch} from 'react'
import {IProduct, IProductTypes, ProductsAction} from '../../types/products'
import {setProducts, setProductsIsLoading, setProductsTotalCount, setProductsTypes} from '../reducers/productsReducer'
import {getProducts} from '../../api/productsApi'
import {ISort, SortTypesName, SortTypesPosition} from '../../types/sort'
import {FilterTypes} from '../../types/filter'
import {PRODUCTS_LOCAL_STORAGE} from '../../utils/consts'

interface filters {
  types: FilterTypes[],
  minPrice?: string,
  maxPrice?: string,
  manufacturers?: string[] | null
}

export const sortProducts = (products: IProduct[], sort: ISort): IProduct[] => {
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

export const filterProducts = (products: IProduct[], filters: filters): IProduct[] => {
  let result = products
  if (filters.types?.length > 0) {
    result = result.filter(product => {
      let isContains = false
      filters.types?.forEach(t => {
        if (product.careType.includes(t)) {
          isContains = true
        }
      })
      return isContains
    })
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
  if (limit > 0) {
    return products.slice((page - 1) * limit, page * limit)
  }
  return products
}

export const fetchProducts = (page?: number, limit?: number, sort?: ISort, filters?: filters) => {
  return (dispatch: Dispatch<ProductsAction>) => {
    dispatch(setProductsIsLoading(true))
    getProducts()
      .then(products => {
        let result = products
        if (sort) {
          result = sortProducts(products, sort)
        }
        if (filters) {
          result = filterProducts(products, filters)
        }
        if (limit && page) {
          dispatch(setProducts(sortByPage(result, page, limit)))
        } else {
          dispatch(setProducts(result))
        }
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


export const addProduct = (url: string, name: string, sizeType: string, size: number, manufacturer: string, barcode: string, brand: string, price: number, careType: string[], description: string) => {
  return (dispatch: Dispatch<ProductsAction>) => {
    dispatch(setProductsIsLoading(true))
    getProducts().then(products => {
      const product: IProduct = {
        id: products[products.length - 1].id + 1,
        url,
        name,
        barcode,
        size,
        brand,
        manufacturer,
        sizeType,
        price,
        careType,
        description,
      }
      const result = [...products, product]
      localStorage.setItem(PRODUCTS_LOCAL_STORAGE, JSON.stringify(result))
      dispatch(setProducts(result))
      dispatch(setProductsTotalCount(result.length))
      dispatch(setProductsTypes(getProductsTypes(result)))
    }).catch(e => {
      console.error(e)
    })
      .finally(() => dispatch(setProductsIsLoading(false)))
  }
}

export const editProduct = (id: number, url: string, name: string, sizeType: string, size: number, manufacturer: string, barcode: string, brand: string, price: number, careType: string[], description: string) => {
  return (dispatch: Dispatch<ProductsAction>) => {
    dispatch(setProductsIsLoading(true))
    getProducts().then(products => {
      const newProduct: IProduct = {
        id,
        url,
        name,
        barcode,
        size,
        brand,
        manufacturer,
        sizeType,
        price,
        careType,
        description,
      }
      const result = products.map(product => {
        if (product.id === newProduct.id) {
          return newProduct
        }
        return product
      })
      localStorage.setItem(PRODUCTS_LOCAL_STORAGE, JSON.stringify(result))
      dispatch(setProducts(result))
      dispatch(setProductsTotalCount(result.length))
      dispatch(setProductsTypes(getProductsTypes(result)))
    }).catch(e => {
      console.error(e)
    })
      .finally(() => dispatch(setProductsIsLoading(false)))
  }
}

export const deleteProduct = (id: number) => {
  return (dispatch: Dispatch<ProductsAction>) => {
    dispatch(setProductsIsLoading(true))
    getProducts().then(products => {
      let result = products
      let foundIndex: number | null = null
      products.forEach((item, index) => {
        if (item.id === id) {
          foundIndex = index
        }
      })
      if (foundIndex || foundIndex === 0) {
        result.splice(foundIndex, 1)
      }
      localStorage.setItem(PRODUCTS_LOCAL_STORAGE, JSON.stringify(result))
      dispatch(setProductsTotalCount(result.length))
      dispatch(setProductsTypes(getProductsTypes(result)))
      dispatch(setProducts(result))
    }).catch(e => {
      console.error(e)
    })
      .finally(() => dispatch(setProductsIsLoading(false)))
  }
}



