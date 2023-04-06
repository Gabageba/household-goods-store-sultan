import {overflowVariant} from '../types/overflow'

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

export const setBodyOverflow = (value: overflowVariant): void => {
  const bodyStyles = document.querySelector('body')?.style
  if (bodyStyles) {
    bodyStyles.overflow = value
  }
}