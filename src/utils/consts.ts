import {IType} from '../types/filter'
import {ISort, SortTypesName, SortTypesPosition} from '../types/sort'

export const COSMETICS_HYGIENE_ROUTE = '/cosmeticsHygiene'
export const BASKET_ROUTE = '/basket'

export const SORT_TYPES: ISort[] = [
  {
    id: 'nameUp',
    name: SortTypesName.name,
    position: SortTypesPosition.up
  },
  {
    id: 'nameDown',
    name: SortTypesName.name,
    position: SortTypesPosition.down,
  },
  {
    id: 'priceUp',
    name: SortTypesName.price,
    position: SortTypesPosition.up
  },
  {
    id: 'priceDown',
    name: SortTypesName.price,
    position: SortTypesPosition.down
  },
]

export const COSMETICS_HYGIENE_TYPES: IType[] = [
  {
    id: 'bodyCare',
    name: 'Уход за телом'
  },
  {
    id: 'handCare',
    name: 'Уход за руками'
  },
  {
    id: 'feetCare',
    name: 'Уход за ногами'
  },
  {
    id: 'faceCare',
    name: 'Уход за лицом'
  },
  {
    id: 'hairCare',
    name: 'Уход за волосами'
  },
  {
    id: 'tanningProducts',
    name: 'Средства для загара'
  },
  {
    id: 'facilitiesForShaving',
    name: 'Средства для бритья'
  },
  {
    id: 'giftSets',
    name: 'Подарочные наборы'
  },
  {
    id: 'hygienicProducts',
    name: 'Гигиеническая продукция'
  },
  {
    id: 'hygieneOralCavity',
    name: 'Гигиена полости рта'
  },
  {
    id: 'paperProducts',
    name: 'Бумажная продукция'
  },
]

export const PRODUCTS_LOCAL_STORAGE = 'Products'
export const BASKET_LOCAL_STORAGE = 'Basket'