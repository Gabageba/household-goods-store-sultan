import {FC} from 'react'
import {BASKET_ROUTE, COSMETICS_HYGIENE_ROUTE} from '../utils/consts'
import CosmeticsHygiene from '../pages/CosmeticsHygiene/CosmeticsHygiene'
import Basket from '../pages/Basket/Basket'

interface Routes {
  path: string
  Element: FC
}

export const publicRoutes: Routes[] = [
  {
    path: COSMETICS_HYGIENE_ROUTE,
    Element: CosmeticsHygiene
  },
  {
    path: BASKET_ROUTE,
    Element: Basket
  }

]