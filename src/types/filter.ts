export interface ISort {
  id: string
  name: string
}

export interface IType {
  id: string,
  name: string
}

export interface IManufacturer {
  name: string
  count: number
}

export enum FilterTypes {
  bodyCare = 'Уход за телом',
  handCare = 'Уход за руками',
  feetCare = 'Уход за ногами',
  faceCare = 'Уход за лицом',
  hairCare = 'Уход за волосами',
  tanningProducts = 'Средства для загара',
  facilitiesForShaving = 'Средства для бритья',
  giftSets = 'Подарочные наборы',
  hygienicProducts = 'Гигиеническая продукция',
  hygieneOralCavity = 'Гигиена полости рта',
  paperProducts = 'Бумажная продукция'
}