import {ISort, IType} from '../types/filter'

export const COSMETICS_HYGIENE_ROUTE = '/cosmeticsHygiene'
export const BASKET_ROUTE = '/basket'

export const SORT_TYPES: ISort[] = [
  {
    id: 'name',
    name: 'Название'
  },
  {
    id: 'price',
    name: 'Цена'
  },
  {
    id: 'descending',
    name: 'Убывание'
  },
  {
    id: 'increase',
    name: 'Возрастание'
  }
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