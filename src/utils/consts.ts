import {ISortType} from '../types/sort'

export const COSMETICS_HYGIENE_ROUTE = '/cosmeticsHygiene'
export const BASKET_ROUTE = '/basket'

export const SORT_TYPES: ISortType[] = [
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

export const COSMETICS_HYGIENE_TYPES = [
  'Уход за телом',
  'Уход за руками',
  'Уход за ногами',
  'Уход за лицом',
  'Уход за волосами',
  'Средства для загара',
  'Средства для бритья',
  'Подарочные наборы',
  'Гигиеническая продукция',
  'Гигиена полости рта',
  'Бумажная продукция',
]