import {overflowVariant} from '../types/overflow'

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

// export const scrollToRef = (ref: React.useRef<HTMLDivElement>) => {
//   if (null !== ref.current) {
//     h1Ref.current.innerText = 'Hello world!';
//   }
// }


export const setBodyOverflow = (value: overflowVariant): void => {
  const bodyStyles = document.querySelector('body')?.style
  if (bodyStyles) {
    bodyStyles.overflow = value
  }
}