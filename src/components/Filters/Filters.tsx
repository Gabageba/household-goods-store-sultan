import React from 'react'
import styles from './Filters.module.scss'
import Price from './Price/Price'
import FilterWithCheckbox from '../filterWithCheckbox/filterWithCheckbox'

const Filters = () => {
  return (
    <div className={styles.filters}>
      <h3 >Подбор по параметрам</h3>
      <Price />
      <FilterWithCheckbox title={'Производитель'}/>
    </div>
  )
}

export default Filters