import {FC} from 'react'
import {BASKET_ROUTE, COSMETICS_HYGIENE_ROUTE} from '../utils/consts'
import CosmeticsHygiene from '../pages/CosmeticsHygiene/CosmeticsHygiene'
import Basket from '../pages/Basket/Basket'
import ProductPage from '../pages/ProductPage/ProductPage'

interface Routes {
  path: string
  Element: FC
  name?: string
}

export const publicRoutes: Routes[] = [
  {
    path: COSMETICS_HYGIENE_ROUTE,
    Element: CosmeticsHygiene,
    name: 'Косметика и гигиена'

  },
  {
    path: BASKET_ROUTE,
    Element: Basket,
    name: 'Козина'
  },
  {
    path: COSMETICS_HYGIENE_ROUTE + '/:barcode',
    Element: ProductPage
  }

]