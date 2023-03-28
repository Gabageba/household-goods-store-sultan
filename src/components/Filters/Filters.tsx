import React from 'react'
import styles from './Filters.module.scss'
import Price from './Price/Price'

const Filters = () => {
  return (
    <div className={styles.filters}>
      <h3 >Подбор по параметрам</h3>
      <Price />
    </div>
  )
}

export default Filters