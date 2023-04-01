import React from 'react'

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

// export const scrollToRef = (ref: React.useRef<HTMLDivElement>) => {
//   if (null !== ref.current) {
//     h1Ref.current.innerText = 'Hello world!';
//   }
// }