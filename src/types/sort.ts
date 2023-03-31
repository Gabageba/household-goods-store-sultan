export interface ISort {
  id: string
  name: SortTypesName
  position: SortTypesPosition
}

export enum SortTypesName {
  name = 'Название',
  price = 'Цена',
}

export enum SortTypesPosition {
  up = 'Возрастание',
  down = 'Убывание',
}