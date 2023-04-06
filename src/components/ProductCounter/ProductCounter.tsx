import React, {FC} from 'react'
import styles from './ProductCounter.module.scss'

interface ProductCounterProps {
  add: () => void
  decrease: () => void
  counter: number
}

const ProductCounter: FC<ProductCounterProps> = ({counter, add, decrease}) => {
  return (
    <div className={styles.productCounter}>
      <div className={styles.productCounter__button} onClick={decrease}>-</div>
      <div>{counter}</div>
      <div className={styles.productCounter__button} onClick={add}>+</div>
    </div>
  )
}

export default ProductCounter