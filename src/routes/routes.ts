import {FC} from 'react'
import {BASKET_ROUTE, CATALOG_ROUTE} from '../utils/consts'
import Catalog from '../pages/Catalog/Catalog'
import Basket from '../pages/Basket/Basket'

interface Routes {
  path: string
  Element: FC
}

export const publicRoutes: Routes[] = [
  {
    path: CATALOG_ROUTE,
    Element: Catalog
  },
  {
    path: BASKET_ROUTE,
    Element: Basket
  }

]