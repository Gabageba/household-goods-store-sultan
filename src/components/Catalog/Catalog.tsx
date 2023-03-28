import React from 'react'
import styles from './Catalog.module.scss'
import Filters from '../Filters/Filters'

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <Filters />
    </div>
  )
}

export default Catalog