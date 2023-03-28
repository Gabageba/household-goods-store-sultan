import React from 'react'
import styles from './Price.module.scss'

const Price = () => {
  return (
    <div className={styles.price}>
      <div className={styles.title}>
        <div>Цена</div>
        <span>₸</span>
      </div>
      <div>
        <input value={0}/>
        <span>-</span>
        <input value={10000}/>
      </div>
    </div>
  )
}

export default Price