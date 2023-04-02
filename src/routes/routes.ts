import {FC} from 'react'
import {ADMIN_ROUTE, BASKET_ROUTE, COSMETICS_HYGIENE_ROUTE} from '../utils/consts'
import CosmeticsHygiene from '../pages/CosmeticsHygiene/CosmeticsHygiene'
import Basket from '../pages/Basket/Basket'
import ProductPage from '../pages/ProductPage/ProductPage'
import Admin from '../pages/Admin/Admin'

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
    path: ADMIN_ROUTE,
    Element: Admin,
    name: 'Админ панель'
  },
  {
    path: COSMETICS_HYGIENE_ROUTE + '/:barcode',
    Element: ProductPage
  },

]